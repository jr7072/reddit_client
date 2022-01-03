import puppeteer  from "puppeteer";

describe('app end-to-end test', () => {

    let browser;
    let page;

    beforeAll(async () => {
        browser = await puppeteer.launch();
        page = await browser.newPage();
    });

    it('loads page', async () => {
        await page.goto("http://localhost:5000");
    })

    afterAll(() => browser.close());
})