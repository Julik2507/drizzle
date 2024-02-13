import { db } from "../../db/migrate.js";
import { people } from "../../db/schema.js";
export async function createPerson(person) {
    try {
        const result = await db.insert(people).values(person);
        return result;
    }
    catch (error) {
        console.log(error);
    }
}
//# sourceMappingURL=auth.service.js.map