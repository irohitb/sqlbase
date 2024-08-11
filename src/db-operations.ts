import { promises as fs } from "fs";
import { Client } from "pg";

const runSqlFile = async (dbUrl:string, sqlPath: string) => {
    const client =  new Client(dbUrl)
    const sql = (await fs.readFile(sqlPath)).toString()
    const result = await client.query(sql);
    return result
}

export default runSqlFile