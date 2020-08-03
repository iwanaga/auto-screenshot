const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  await page.goto('https://www.example.com/path');
  await page.click('#user-drop-down');
  await page.screenshot({path: 'test.png'});
})();
