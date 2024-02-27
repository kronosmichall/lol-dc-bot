const fs = require('fs')
const path = require('path')
const { Client, Collection, Events, GatewayIntentBits } = require('discord.js')
const token = process.env.TOKEN

const client = new Client({ intents: [GatewayIntentBits.Guilds] })
client.commands = new Collection()

const foldersPath = path.join(__dirname, 'commands')
const commandFolders = fs.readdirSync(foldersPath)
for (const folder of commandFolders) {
    const commandFiles = fs.readdirSync(path.join(foldersPath, folder)).filter(file => file.endsWith('.js'))
    for (const file of commandFiles) {
        const command = require(path.join(foldersPath, folder, file))

        if ('data' in command && 'execute' in command) {
            client.commands.set(command.data.name, command)
        } else {
            console.warn(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`)
        }
    }
}

client.once(Events.ClientReady, client => {
    console.log(`Logged in as ${client.user.tag}`)
})
client.login(token)

client.on(Events.InteractionCreate, async interaction => {
    if (!interaction.isChatInputCommand()) {
        console.log('Not a command')
        return
    }

    const command = interaction.client.commands.get(interaction.commandName)
    if (!command) {
        console.log(`Command not found: ${interaction.commandName}`)
        return
    }

    try {
        await command.execute(interaction)
    } catch (error) {
        console.error(error)
        if (interaction.replied || interaction.deferred) {
            await interaction.followUp({ content: 'There was an error while executing this command!', ephemeral: true })
        } else {
            await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true })
        }
    }
})

const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('hello im a dc bot')
})

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})