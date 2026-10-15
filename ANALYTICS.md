# Slopp usage statistics

Measurement begins with the analytics release. Earlier visitor totals and time
spent cannot be reconstructed from drawings. This uses Slopp's Worker and D1,
without a Google Analytics account or another subscription.

## What the figures mean

- **Unique browsers:** distinct randomly assigned IDs stored in this browser.
  They are not verified people. Another device, private browsing or cleared
  storage can count the same person again. Blocked storage is reported separately.
- **Visits:** a shared browser visit ends after 30 minutes without recorded input.
  Reloads and other tabs within that window share its ID. Simultaneous first-ever
  tab loads can race in localStorage and create separate IDs.
- **Returning browsers:** browsers with an earlier recorded visit. For a selected
  period, new and returning can overlap when someone first visits and returns
  during that same period. Return rate is returning / unique browsers.
- **Active time:** time while visible and focused, stopping 60 seconds after the
  last pointer, keyboard, wheel or touch input. Looking without moving for longer
  is not counted. Average and median are per visit, including zero-time visits.
- **Page views, device and referrer:** page loads; viewport-size device categories;
  referring hostname only. Direct, suppressed and unknown referrals are grouped.

Heartbeats run every 15 seconds and flush on focus/visibility changes. Retried
or reordered requests cannot increase a cumulative counter twice. Failed fetches
are retried by the next heartbeat; a final beacon cannot guarantee delivery after
an offline close. Time growth is bounded by server elapsed time plus 60 seconds.
Dates are server UTC timestamps; period filters accept timezone-qualified ISO
dates. A period includes visits that started within it, including their entire
recorded active time. An ongoing visit's total can therefore grow later.

## Read an owner report

Use the authenticated Sites connector for project
`appgprj_6abd4d29e4608191b282155a89f69d67`:

1. Call `read_database_overview` and select its exact `DB` binding and
   `analytics_pages` table.
2. Call `read_database_table_rows` with limit 25. Follow only the returned
   `model_projection.next_offset` until null. Stop and label incomplete if rows
   or columns are omitted/truncated, pagination cannot finish, or the table
   changes during collection. Collect all history for return classification.
3. Save the complete rows as `{"rows":[...],"complete":true}` outside the public
   directory, then run `bun scripts/analytics-report.mjs < /path/to/rows.json`.
   Optional arguments are inclusive `since` and exclusive `until`, for example
   `2026-10-15T00:00:00+01:00 2026-10-16T00:00:00+01:00`.

There is no public analytics read endpoint. Do not publish row exports. The
existing public drawing export contains only drawings, with no analytics IDs.
For volumes beyond the connector's pagination limit, use the Sites database
viewer to export the complete table before generating a report.

## Testing and opting out

Open `/?analytics=test` for QA. These records use separate browser IDs, carry
`is_test=1`, and are always excluded by the report. Do not count deployment QA as
an audience. Open `/?analytics=off` to persistently disable collection in that
browser; `/?analytics=on` enables it again. Browser Do Not Track and Global Privacy
Control also disable collection. No IP addresses or full referring URLs are
stored. Analytics failure never blocks the artwork.

Run `bun test tests/analytics.test.js tests/analytics-client.test.js
tests/analytics-report.test.js` for the focused suite. Test databases must be
temporary; never test migrations against the visitor preview database.
