module.exports = function (msg) {
    for (group in this.constants.invitationText) {
        userInGroup = false;
        for (message in this.messageLog.messages)
        {
            try {
                if (this.messageLog.messages[message].from.id == msg.from.id && this.messageLog.messages[message].chat.title == group)
                    userInGroup = true;
            } catch (ex) {
                console.log("message not readable");
            }
        }
        if (userInGroup)
            this.sendMessage(msg.chat.id, this.constants.invitationText[group]).catch(
                function (error) {
                    // bot was probably removed
                    console.log(chalk.red(logSymbols.error, error));
                    return;
                }
            );
    }
}
