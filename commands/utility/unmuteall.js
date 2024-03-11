const { SlashCommandBuilder } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('unmuteall')
        .setDescription('unmuteall'),
    async execute(interaction) {
        const guild = await interaction.guild.fetch()
        const members = guild.members.cache
        
        members.forEach(member => {
            console.log('username', member.user.username)
            console.log('voice', member.voice)
            if (member.voice.channel) {
                member.voice.setMute(false)
            }
            console.log('member', member)
        })
        await interaction.reply(`Pozwalam wam szczekać`)
    },
}