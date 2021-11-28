
// Require the Bolt package (github.com/slackapi/bolt)
const { App } = require("@slack/bolt");
const axios = require("axios");

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  socketMode: true,
  appToken: process.env.SLACK_APP_TOKEN 
});


//Add code here
const findInstanceForAlias = async (alias) => {
  const url = `https://api.status.salesforce.com/v1/search/${alias}`;
  try {
    const response = await axios.get(url);
  } catch (error) {
    console.error('error in findInstanceForAlias :', error);
  }
}

(async () => {
  // Start your app
  await app.start(process.env.PORT || 3000);

  console.log('⚡️ Bolt app is running!');
})();
