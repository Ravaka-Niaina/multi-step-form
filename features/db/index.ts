import "dotenv/config";
import {drizzle} from "drizzle-orm/node-postgres";
import {usersTable} from "./schemas/userSchema";
import {eq} from "drizzle-orm";

const db = drizzle(process.env.DATABASE_URL!);

async function main() {
  const user: typeof usersTable.$inferInsert = {
    name: "John",
    emailAddress: "john@gmail.com",
    phoneNumber: "+261342379788",
  };

  await db.insert(usersTable).values(user);
  console.log("New user created");

  const users = await db.select().from(usersTable);
  console.log("Getting all users from the database: ", users);

  await db
    .update(usersTable)
    .set({phoneNumber: "+261330011122"});
  console.log("User info updated!")

  await db
    .delete(usersTable)
    .where(eq(usersTable.emailAddress, user.emailAddress));

  console.log("User deleted!");
}

main();