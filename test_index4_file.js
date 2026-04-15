const puppeteer = require('puppeteer');

async function testIndex4() {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    try {
        console.log('Navigating to index4.html...');
        await page.goto('file:///Users/ajay/Downloads/RaviKlaassens_Offline/index4.html', { waitUntil: 'networkidle2' });

        // Wait for page to load
        await new Promise(resolve => setTimeout(resolve, 3000));

        // Take a screenshot first (not full page)
        await page.screenshot({ path: 'index4_file_test.png' });
        console.log('✓ Screenshot saved as index4_file_test.png');

        // Check page title
        const title = await page.title();
        console.log(`✓ Page title: ${title}`);

        // Check if portfolio grid exists
        const portfolioGrid = await page.$('.portfolio-grid');
        if (portfolioGrid) {
            console.log('✓ Portfolio grid found');

            // Count portfolio items
            const items = await page.$$('.portfolio-item');
            console.log(`✓ Found ${items.length} portfolio items`);

            // Check page height
            const bodyHeight = await page.evaluate(() => document.body.scrollHeight);
            console.log(`✓ Page height: ${bodyHeight}px`);

        } else {
            console.log('✗ Portfolio grid not found');
            // Debug: check what elements exist
            const allDivs = await page.$$('div');
            console.log(`Total divs: ${allDivs.length}`);
        }

        // Check navigation links
        const worksLink = await page.$('a[href="index4.html"]');
        if (worksLink) {
            console.log('✓ Works navigation link points to index4.html');
        } else {
            console.log('✗ Works navigation link not found or incorrect');
        }

    } catch (error) {
        console.error('Error:', error);
    } finally {
        await browser.close();
    }
}

testIndex4();