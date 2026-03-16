import {integer, pgTable, varchar} from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({length: 20}).notNull(),
  emailAddress: varchar({length: 100}).notNull().unique(),
  phoneNumber: varchar({length: 20}).notNull().unique(),
});

export const plansTable = pgTable("plans", {
  id: varchar({length: 50}).primaryKey().notNull(),
});

export const isPlanMonthlyTable = pgTable("isPlanMonthly", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  userId: integer().notNull().references(() => usersTable.id),
  isPlanMonthly: integer()
});

export const chosenPlanTable = pgTable("chosenPlans", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  isMonthlyId: integer().unique().notNull().references(() => isPlanMonthlyTable.id),
  planId: varchar({length: 50}).notNull().references(() => plansTable.id),
})

export const addOnsTable = pgTable("addOns", {
  id: varchar({length: 50}).primaryKey().notNull(),
});

export const chosenAddOnsTable = pgTable("chosenAddOns", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  isMonthlyId: integer().notNull().references(() => isPlanMonthlyTable.id),
  addOnsId: varchar({length: 50}).notNull().references(() => addOnsTable.id),
})