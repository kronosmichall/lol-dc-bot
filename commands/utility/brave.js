const { SlashCommandBuilder } = require('discord.js')
const puppeteer = require('puppeteer')
const fs = require('fs')

async function getScreenshot() {
    const filename = new Date().getTime() + '.png'
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.setViewport({ width: 1000, height: 800 })
    await page.goto('https://www.ultimate-bravery.net/Classic')
    await page.click('.fc-button.fc-cta-do-not-consent.fc-secondary-button')
    await page.screenshot({ path: filename })
    await browser.close()

    return filename
}

module.exports = {
    data: new SlashCommandBuilder()
        .setName('brave')
        .setDescription('brave'),
    async execute(interaction) {
        const filePromise = getScreenshot()
        await interaction.reply("Bravery is coming")
        const file = await filePromise
        await interaction.channel.send({ files: [file] })
        fs.unlinkSync(file)
    },
}