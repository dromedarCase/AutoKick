# Geulhorn

## About

Geulhorn is a small telegram bot, which automatically removes group members with bad behaviour.

## Installation

This project requires NodeJS for execution and uses NPM for dependency management.
First, clone this repository using `git clone https://github.com/dromedarCase/Geulhorn.git`.
Install dependencies with `npm install`. 

## Usage

Run it with `node index`. You will have to create a config file called `constants.js`. You can use the template in `constants.js.default`. In order to connect to Telegram, export your bot's token using `export GeulhornToken=[YOUR TOKEN]`. You can acquire a token by messaging @BotFather. For users to rejoin you'll have to provide at least one default group in `constants.js` and an invite link like this: `export GeulhornInvite=[INVITE LINK]`.
