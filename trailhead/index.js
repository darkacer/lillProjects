const puppeteer = require('puppeteer');

const scrapeImages = async (username) => {
    const browser = await puppeteer.launch( { headless: true });
    const page = await browser.newPage();
    const url = 'https://trailhead.salesforce.com/en/me/' + username;
    await page.goto(url);
    console.log(url);
    //await page.screenshot({path: '3.png'});

    console.log('document');
    const myclassname2 = await page.evaluate(() => document.querySelectorAll(".user-information__achievements-data")[1].innerHTML);
    console.log(myclassname2 + ' is');
    await browser.close();
}
scrapeImages('abhishek-dhamale-sfdc/');