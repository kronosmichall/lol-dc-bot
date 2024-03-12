const { SlashCommandBuilder } = require('discord.js')
const puppeteer = require('puppeteer')
const fs = require('fs')

async function getScreenshot() {
    const filename = new Date().getTime() + '.png'
    const browser = await puppeteer.launch({ args: ['--no-sandbox'] })
    const page = await browser.newPage()
    await page.setViewport({ width: 1000, height: 800 })
    await page.goto('https://www.ultimate-bravery.net/Classic', { waitUntil: ['load', 'domcontentloaded'] })
    await page.waitForNavigation()
    await page.waitForTimeout(5000)

    try {
        await page.click('.fc-button.fc-cta-do-not-consent.fc-secondary-button')
    } catch (e) {
        console.error('No cookie consent found')
        console.error(e)
    }
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