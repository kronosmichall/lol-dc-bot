const { SlashCommandBuilder } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('muteall')
        .setDescription('muteall'),
    async execute(interaction) {
        const guild = await interaction.guild.fetch()
        const members = guild.members.cache
        
        members.forEach(member => {
            console.log("==============================================")
            console.log("calling mute on", member.user.username)
            console.log('member', member)
            console.log("==============================================")
            console.log('voice', member.voice)
            if (member.voice.channel) {
                try {
                    member.voice.setMute(true)
                    console.log("successfull mute", member.user.username)
                } catch (e) {
                    console.error(e)
                    console.log("failed mute", member.user.username)
                }
            }
        })
        await interaction.reply(`shush`)
    },
}