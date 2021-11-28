// Require the Bolt package (github.com/slackapi/bolt)
const { App } = require("@slack/bolt");
const findInstanceForAlias = require("./slashCommand");

const app = new App({
    token: process.env.SLACK_BOT_TOKEN,
    signingSecret: process.env.SLACK_SIGNING_SECRET,
    socketMode: true,
    appToken: process.env.SLACK_APP_TOKEN
});

app.command("/find-salesforce-instance", async ({ command, ack, say }) => {
    try {
        console.log(`Received command ${command}`);
        await ack();
        const instanceKey = await findInstanceForAlias(command.text);
        say(instanceKey);
    } catch (error) {
        console.log("err")
        console.error(error);
        say("error :", error);
    }
});

(async () => {
    // Start your app
    await app.start(process.env.PORT || 3000);

    console.log('⚡️ Bolt app is running!');
})();
