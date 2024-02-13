import pg from "pg";
import { drizzle } from "drizzle-orm/node-postgres";
import { migrate } from "drizzle-orm/node-postgres/migrator";
const { Pool } = pg;
const pool = new pg.Pool({
    user: "postgres",
    host: "localhost",
    database: "postgres",
    password: "postgres",
    port: 5432,
});
export const db = drizzle(pool);
async function main() {
    console.log("migration starting..");
    await migrate(db, { migrationsFolder: "drizzle" });
    console.log("migrations is ended");
}
main().catch((err) => {
    console.log(err);
});
//# sourceMappingURL=migrate.js.map