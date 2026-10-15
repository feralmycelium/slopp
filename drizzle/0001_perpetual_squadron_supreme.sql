CREATE TABLE `analytics_pages` (
	`page_id` text PRIMARY KEY NOT NULL,
	`session_id` text NOT NULL,
	`visitor_id` text NOT NULL,
	`started_at` text NOT NULL,
	`last_seen_at` text NOT NULL,
	`active_ms` integer DEFAULT 0 NOT NULL,
	`persistent` integer NOT NULL,
	`is_test` integer DEFAULT 0 NOT NULL,
	`referrer_host` text NOT NULL,
	`device` text NOT NULL
);
--> statement-breakpoint
CREATE INDEX `analytics_visitor_index` ON `analytics_pages` (`visitor_id`);--> statement-breakpoint
CREATE INDEX `analytics_start_index` ON `analytics_pages` (`started_at`);