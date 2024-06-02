require('dotenv').config();

const MY_TOKEN = process.env.TOKEN;

const { Client, GatewayIntentBits } = require('discord.js');

const PREFIX = '!';

const client = new Client({intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
]});

client.on('ready', () => {
    console.log(`The ${client.user.username} is now online!`)
})

client.on('messageCreate', (msg) => {
    console.log(msg.content)

    if (msg.content === 'Hello'){
        msg.reply(`Oh I see`)
        msg.channel.send(`Hello ${msg.author.tag}`)
    }
})

client.login(MY_TOKEN)



