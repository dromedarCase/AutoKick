module.exports = function (msg) {
    for (group in this.constants.invitationText) {
        userInGroup = false;
        for (message in this.messageLog.messages)
        {
            console.log(message.from.id)
            console.log(msg.from.id)
            console.log(message.chat.title)
            console.log(group)
            console.log()
            if (message.from.id == msg.from.id && message.chat.title == group)
                userInGroup = true;
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
