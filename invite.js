module.exports = function (msg) {
    this.sendMessage(msg.chat.id, this.constants.invitation).catch(
        function (error) {
            // bot was probably removed
            console.log(chalk.red(logSymbols.error, error));
            return;
        }
    );
}
