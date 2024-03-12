const { SlashCommandBuilder } = require('discord.js')
const puppeteer = require('puppeteer')
const fs = require('fs')

async function getScreenshot() {
    const filename = new Date().getTime() + '.png'
    const browser = await puppeteer.launch({ args: ['--no-sandbox'] })
    const page = await browser.newPage()
    await page.setViewport({ width: 1000, height: 800 })
    await page.goto('https://www.ultimate-bravery.net/Classic', { waitUntil: ['load', 'domcontentloaded'] })

    const selectors = [
        `[class="up-fist-spell-to-maximize-img"]`, 
        `[class="ub-summoner-spells"]`, 
        `[class="ub-runes-primary"]`, 
        `[class="ub-runes-secondary"]`, 
        `[class="ub-rune-stats"]`, 
        `[class="ub-items"]`, 
        `[class="ub-role-item"]`, 
        `[class="ub-data-set-title"]`,
        `[class="ub-champion-portrait"]`,
        `[class="ub-data-set-title"]`,
        `[class="champion-name"]`,
    ]
    const promises = selectors.map(selector => page.waitForSelector(selector))
    for (const promise of promises) {
        try {
            await promise
        } catch(e) {
            console.error(e)
        }
    }
    console.log("waiting 5 seconds")
    await new Promise(resolve => setTimeout(resolve, 5000))
    console.log("done waiting 5 seconds")
    try {
        await page.click('.fc-button.fc-cta-do-not-consent.fc-secondary-button')
    } catch (e) {
        console.error('No cookie consent found')
        console.error(e)
    }
    await page.screenshot({ path: filename })
    browser.close()

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
