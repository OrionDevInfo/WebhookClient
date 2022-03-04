const { MessageEmbed } = require('discord.js');

module.exports = {
    example: new MessageEmbed({
        // Add only parameters that you need and delete useless ones.
        color: 'RANDOM',
        timestamp: Date.now(),
        url: 'https://github.com/OrionDevInfo/WebhookClient', // URL for the title
        author: {
            name: 'ORION#8393',
            url: 'https://github.com/OrionDevInfo',
            iconURL: 'https://avatars.githubusercontent.com/u/81926548'
        },
        title: 'Webhook Client',
        description: 'Here is an example MessageEmbed',
        fields: [
            { name: '\u200B', value: '\u200B' }, // Empty field
            {
                name: 'Embed Limits',
                value: `There are a few limits to be aware of while planning your embeds due to the API's limitations. Here is a quick reference you can come back to:

                    • Embed titles are limited to 256 characters
                    • Embed descriptions are limited to 4096 characters
                    • There can be up to 25 fields
                    • A field's name is limited to 256 characters and its value to 1024 characters
                    • The footer text is limited to 2048 characters
                    • The author name is limited to 256 characters
                    • The sum of all characters from all embed structures in a message must not exceed 6000 characters
                    • Ten embeds can be sent per message
                `
            },
            { name: '\u200B', value: 'Links can be displayed like that in the description and field values : [GitHub](https://github.com/OrionDevInfo)' },
            { name: '\u200B', value: '[Access MessageEmbed documentation here](https://discord.js.org/#/docs/main/stable/class/MessageEmbed)' }
        ],
        thumbnail: {
            url: 'https://avatars.githubusercontent.com/u/81926548',
            // height: X,
            // width: X
        },
        // image: {
        //     url: 'https://',
        //     height: X,
        //     width: X
        // }
        // provider: {
        //     name: 'ORION',
        //     url: 'https://avatars.githubusercontent.com/u/81926548'
        // },
        footer: {
            text: 'All Rights Reserved',
            iconURL: 'https://avatars.githubusercontent.com/u/81926548'
        }

    }),
    yourEmbed: new MessageEmbed({
        color: 'BLURPLE',
        timestamp: Date.now(),
        title: 'Embed'
    }),
}