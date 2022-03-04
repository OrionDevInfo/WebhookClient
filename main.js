const { WebhookClient } = require('discord.js');
const data = require('./config/data.js');
const channels = require('./config/channels.js');
const embeds = require('./config/embeds.js');

/////   /////   /////

// Make sure to replace null by channels.NameYouDefined before running
msgChannel = null;
msgContent = 'Here is the content, you can use @\ everyone or @\ here if needed';
// Add all embeds you want to send in this list with this format embeds.NameYouDefined
msgEmbeds = [embeds.example]

/////   /////   /////

const client = new WebhookClient({
    url: msgChannel
});

client.send({
    username: data.username,
    avatarURL: data.avatarURL,

    content: msgContent,
    embeds: msgEmbeds
})