const { SlashCommandBuilder } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('muteall')
        .setDescription('muteall'),
    async execute(interaction) {
        const guild = await interaction.guild.fetch()
        const members = guild.members.cache
        
        members.forEach(member => {
            console.log('username', member.user.username)
            console.log('voice', member.voice)
            if (member.voice.channel) {
                member.voice.setMute(true)
            }
        })
        await interaction.reply(`Kurwy zamilkły`)
    },
}