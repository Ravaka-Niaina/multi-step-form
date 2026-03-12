import {integer, pgTable, varchar} from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({length: 20}).notNull(),
  emailAddress: varchar({length: 100}).notNull().unique(),
  phoneNumber: varchar({length: 20}).notNull().unique(),
});