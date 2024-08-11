import chalk from "chalk";
import chokidar from "chokidar";
import path from "path";
import { getDbClient, runSqlFile } from "./db-operations";
import { Client } from "pg";



export const performSqlChanges =  async (filePath:string, dbClient: Client) => {
  console.log(chalk.green("->"), `Applying file ${filePath}`);
  try {
    await runSqlFile(dbClient, filePath);
    console.log(
      chalk.green("->"),
      `successfully updated ${filePath}`
    );
  } catch (error: any) {
    if (error.positio && error.message) {
      console.log(
        chalk.red("->"),
        `Applying SQL file failed at position ${error?.position}. Message: ${error.message}` 
      );
    } else {
      console.log(
        chalk.red("->"),
        `Applying SQL file failed: ${JSON.stringify(error)}` 
      );
    }
  }
}

export const  watchSqlFileChanges = async (sourcePath: string, dbUrl: string) => {
  const sqlGlob = path.join(sourcePath, "**", "*.sql");
  const dbClient = await getDbClient(dbUrl)
  console.log(
    chalk.green("->"),
    `Watching changes at ${sqlGlob}`
  );
  const watcher = chokidar.watch(sqlGlob, {
    ignoreInitial: true,
  });
  watcher.on("change", (path: string) => {
    performSqlChanges(path, dbClient);
  });
  watcher.on("add", (path: string) => {
    performSqlChanges(path, dbClient);
  });
}
