# "Find my Salesforce instance" Slack app
A simple Slack app that tells you on whiich instance your Salesforce org is hosted for a given domain.

## Steps
1. Create a Slack App
2. Enable `Slash commands`
    a. Fill in the command name and description
    b. Give a dummy request URL blank for now
    c. Give the usage hint as `[domain name]` as it needs domain name as input
    d. Save
3. Go to `OAuth & Permissions`
    a. You'll see that a bot token is present
    b. Give these scopes: `commands`, `chat:write.public` and `chat:write`
4. Install this into your workspace
5. Deploy this to `Heroku` or any other server
6. Copy the URL of the server
    a. Append the command name used in step `2.a`
    b. Paste this full value in the `Slash commands` `2.b` step
    c. For ex., if command name was `find-instance` then full url is `https://<server url>/find-instance`
7. Enable socket mode for the Slack app
8. Update your app's env vars `SLACK_BOT_TOKEN`, `SLACK_SIGNING_SECRET`, and `SLACK_APP_TOKEN`
9. That's it, it'll start working - search for `/find-instance <domain-name>` and you should get a response back