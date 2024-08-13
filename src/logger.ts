import chalk from "chalk";

const logger = {
    error: (msg: string) => {
        console.error(chalk.red("ERROR ->"), msg);
    },
    warning: (msg: string) => {
        console.warn(chalk.yellow("WARNING ->"), msg);
    },
    success: (msg: string) => {
        console.log(chalk.green("SUCCESS ->"), msg);
    }
};

export default logger;