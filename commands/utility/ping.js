const { SlashCommandBuilder } = require('discord.js')

const amogus = `
5v⣿⣿⠟⢹⣶⣶⣝⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿v v⣿⡟⢰⡌⠿⢿⣿⡾⢹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿v 
v⣿⣿⢸⣿⣤⣒⣶⣾⣳⡻⣿⣿⣿⣿⡿⢛⣯⣭⣭⣭⣽⣻⣿⣿v v⣿⣿⢸⣿⣿⣿⣿⢿⡇⣶⡽⣿⠟⣡⣶⣾⣯⣭⣽⣟⡻⣿⣷⡽v 
v⣿⣿⠸⣿⣿⣿⣿⢇⠃⣟⣷⠃⢸⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿v v⣿⣿⣇⢻⣿⣿⣯⣕⠧⢿⢿⣇⢯⣝⣒⣛⣯⣭⣛⣛⣣⣿⣿⣿v 
v⣿⣿⣿⣌⢿⣿⣿⣿⣿⡘⣞⣿⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿v v⣿⣿⣿⣿⣦⠻⠿⣿⣿⣷⠈⢞⡇⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿v 
v⣿⣿⣿⣿⣿⣗⠄⢿⣿⣿⡆⡈⣽⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿v v⣿⣿⣿⡿⣻⣽⣿⣆⠹⣿⡇⠁⣿⡼⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟v 
v⠿⣛⣽⣾⣿⣿⠿⠋⠄⢻⣷⣾⣿⣧⠟⣡⣾⣿⣿⣿⣿⣿⣿⡇v v⡟⢿⣿⡿⠋⠁⣀⡀⠄⠘⠊⣨⣽⠁⠰⣿⣿⣿⣿⣿⣿⣿⡍⠗v 
v⣿⠄⠄⠄⠄⣼⣿⡗⢠⣶⣿⣿⡇⠄⠄⣿⣿⣿⣿⣿⣿⣿⣇⢠v v⣝⠄⠄⢀⠄⢻⡟⠄⣿⣿⣿⣿⠃⠄⠄⢹⣿⣿⣿⣿⣿⣿⣿⢹v 
v⣿⣿⣿⣿⣧⣄⣁⡀⠙⢿⡿⠋⠄⣸⡆⠄⠻⣿⡿⠟⢛⣩⣝⣚v v⣿⣿⣿⣿⣿⣿⣿⣿⣦⣤⣤⣤⣾⣿⣿⣄⠄⠄⠄⣴⣿⣿⣿⣇v 
v⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⣄⡀⠛⠿⣿⣫⣾
`

module.exports = {
    data: new SlashCommandBuilder()
        .setName('amogus')
        .setDescription('amogus'),
    async execute(interaction) {
        await interaction.reply(amogus)
    },
}