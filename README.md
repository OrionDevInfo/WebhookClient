# [WebhookClient](https://github.com/OrionDevInfo/WebhookClient)

  

### What is a WebhookClient

  

Webhooks are a utility used to send messages to text channels without needing a Discord application.
Webhooks are useful for allowing something to send messages without requiring a Discord application.
There are two structures to make use of this functionality: `Webhook` and `WebhookClient`.
`WebhookClient` is an extended version of a `Webhook`, which allows you to send messages through it without needing a bot client.

### Installation

 1. Install Node.js
 Windows : Download from [Node.js website](https://nodejs.org/en/) `v16.x LTS`.
 macOS : Download from [Node.js website](https://nodejs.org/en/) `v16.x LTS`or use  [Homebrew](https://brew.sh) (`brew install node`).
 Linux : Consult [this page](https://nodejs.org/en/download/package-manager/) to determine how you should install Node.
2. Download ZIP on [GitHub](https://github.com/OrionDevInfo/WebhookClient).
3. Open a terminal and use `npm install` to install required module(s).

### First Use

##### Making a webhook in Discord:
1.  Open your  *Server Settings*  and head into the  *Integrations*  tab.
2.  Click the *Create Webhook* button to create a new webhook.
3. Select a channel to post messages and copy URL link.
##### Edit configuration files:
1. Open `channels.js` and paste URL link in place of example link.
> You can also replace *example* by the name of the channel you chose. It will be easier with several links.
2. Open `main.js` and replace `msgChannel = null`by `msgChannel = channels.example`.
In case you replaced *example* by the name of the channel : `channels.ChannelNameYouDefined`
3. Run the program with `npm run start` in the terminal.
> Now, you can edit `embeds.js` to send personalised messages. You will need to add each embed you want to send in `main.js`, like this: `msgEmbeds = [ADD ALL EMBEDS HERE: embeds.NAME, embeds.NAME2]`.
