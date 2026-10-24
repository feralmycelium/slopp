CREATE TABLE `reports` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`mark_id` text NOT NULL,
	`created_at` text NOT NULL,
	`reason` text,
	`reporter_hash` text NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `reports_mark_reporter_unique` ON `reports` (`mark_id`,`reporter_hash`);--> statement-breakpoint
CREATE INDEX `reports_reporter_index` ON `reports` (`reporter_hash`,`created_at`);--> statement-breakpoint
ALTER TABLE `marks` ADD `hidden_at` text;--> statement-breakpoint
ALTER TABLE `marks` ADD `hidden_reason` text;