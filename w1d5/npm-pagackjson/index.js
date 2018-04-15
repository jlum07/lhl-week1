var chalk = require("chalk");

var message = "Hello " + chalk.yellow("World");
console.log(message);

var fox = chalk.bgYellow("The ") + chalk.yellow("quick ") + chalk.green("brown ") + chalk.red("fox ") + chalk.blue("jumped");
console.log(fox);