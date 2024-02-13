import { db } from "../../db/migrate.js";
import { people } from "../../db/schema.js";
import bcrypt from "bcrypt";

type newPerson = typeof people.$inferInsert;

export async function createPerson(person: newPerson) {
  try {
    const result = await db.insert(people).values(person);
    return result;
  } catch (error) {
    console.log(error);
  }
}
