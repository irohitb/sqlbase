import yargs from 'yargs';

export const initializeCliCommand = async () => {
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
            aliases: ["watch", "w"],
            describe: "Watch and apply changes in SQL files specified in the path flag",
            builder: {
                db: {
                    describe: "URL to access PostgreSQL database",
                    type: "string",
                    demandOption: true,
                },
            },
            handler: (argv) => {
                const { path, db } = argv;
                console.log(`Watching SQL files in ${path} and applying changes to ${db}`);
            },
        })
    
  
};
