import { withFile } from "tmp-promise";
import { promises as fs } from "fs";
import path from "path";

export interface SupabaseMigrationProps {
    migrationName:string
    filesPath: string[];
    supabaseGeneratedMigrationPath: string
    databaseUrl?: string
    linked?: boolean
}


export const createSupabaseMigration = ({
    migrationName, 
    filesPath, 
    supabaseGeneratedMigrationPath, 
    databaseUrl, 
    linked = false
}: SupabaseMigrationProps) => {
    withFile(
        async ({ path: tempSqlFile }) => {
            const fileToWrite = await fs.open(tempSqlFile, "w");
            for (const filePath of filesPath) {
                const sql = await fs.readFile(filePath);
                await fileToWrite.writeFile(`-- ${path.basename(filePath)}\n`);
                await fileToWrite.writeFile(sql);
                await fileToWrite.writeFile("\n\n");
            }
            await fileToWrite.close()
            const cmd = [
                `supabase db diff -f ${migrationName}`, 

            ]
            if (linked) {
                cmd.push('--linked')
            }
            if (databaseUrl) {
                cmd.push(`--db-url ${databaseUrl}`)
            }
            // const cliCommand = cmd.join(" ")
        })
}
