const colors = require('colors');

class Console {
    welcomeMessage = (port) => {
        console.log(colors.yellow("----------------------------------------------------------------------------------------------------------------------------------"));
        console.log(colors.bgRed("||Welcome to VTracker||"));
        console.log(colors.red(`To access the webapp, use 'your_ip:${port} or 'localhost:${port}'`));
        console.log(colors.magenta("REMEMBER!! START FIRST ACC SERVER AND ALLOW RESULTS FUNCTION. FOR MORE, VISIT: https://www.acc-wiki.info/wiki/Server_Configuration#Result_Files"));
        console.log(colors.gray("v1.4.1"));
        console.log(colors.yellow("----------------------------------------------------------------------------------------------------------------------------------"));
    }

    settingsMessage = () => {
        console.log(colors.magenta("Automatic open of the browser disabled. To activate it, edit the config.json file"));
        console.log(colors.yellow("----------------------------------------------------------------------------------------------------------------------------------"));
    }

}

module.exports = new Console();
