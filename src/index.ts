import yargs from 'yargs';
import {  watchSqlFileChanges } from './watch'

yargs
    .usage("Usage: $0 <command> [options]")
    .example(
        "$0 watch --path {sql_directory}/ --db postgres://postgres:postgres@localhost:5432/postgres",
        "Watches the SQL path in the given directory and runs modified changes on save directly against the database."
    )
    .option("path", {
        alias: "p",
        describe: "The path/folder containing SQL files",
        type: 'string',
        default: ".",
    })
    .command({
        command: "watch",
        aliases: ["w"],
        describe: "Watch and apply changes in SQL files",
        builder: (yargs) => {
            return yargs.option('db', {
                describe: "URL to access PostgreSQL database",
                type: "string",
                demandOption: true,
            });
        },
        handler: async (argv) => {
          const {path, db:dbUrl} = argv
          await watchSqlFileChanges(path, dbUrl)

          
        },
    })
    .demandCommand()
    .parse();
