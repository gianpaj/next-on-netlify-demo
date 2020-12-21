const { App, ExpressReceiver } = require("@slack/bolt");

const expressReceiver = new ExpressReceiver({
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  processBeforeResponse: true,
});

// Initializes your app with your bot token and signing secret
const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  receiver: expressReceiver,
});

// Listens for messages that mention the bot
app.event("app_mention", async ({ event, say }) => {
  await say(`Hey there, <@${event.user}>!`);
});

export default (req, res) => {
  res.status(200);
  console.log("⚡️ Bolt app is running!");
  res.send("asdfa");
};
