const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

async function comprehensiveTest() {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    const viewport = { width: 1920, height: 1080 };
    await page.setViewport(viewport);

    const resultsDir = './scroll_test_results';
    if (!fs.existsSync(resultsDir)) {
        fs.mkdirSync(resultsDir);
    }

    const results = [];

    try {
        console.log('📱 Loading index4.html...');
        await page.goto(`file://${process.cwd()}/index4.html`, { waitUntil: 'networkidle2' });
        
        await new Promise(r => setTimeout(r, 2000));

        // Get page metrics
        const pageHeight = await page.evaluate(() => document.body.scrollHeight);
        const viewportHeight = viewport.height;
        const numScrolls = Math.ceil(pageHeight / viewportHeight);

        console.log(`\n✅ Page loaded successfully`);
        console.log(`📏 Page height: ${pageHeight}px`);
        console.log(`🔍 Viewport: ${viewport.width}x${viewport.height}px`);
        console.log(`📸 Total screenshots to capture: ${numScrolls}`);

        // Check critical elements
        const hasHeader = await page.$('header, nav.navbar_fixed, [data-dock-trigger]');
        const hasFooter = await page.$('footer');
        const hasPortfolio = await page.$('.portfolio-grid');
        const portfolioItems = await page.$$('.portfolio-item');
        const hasWorks = await page.$('a[href*="index4"]');

        console.log(`\n✅ Page Structure Check:`);
        console.log(`  - Header/Navigation: ${hasHeader ? '✓' : '✗'}`);
        console.log(`  - Portfolio Grid: ${hasPortfolio ? '✓' : '✗'}`);
        console.log(`  - Portfolio Items: ${portfolioItems.length}`);
        console.log(`  - Footer: ${hasFooter ? '✓' : '✗'}`);
        console.log(`  - Works Link: ${hasWorks ? '✓' : '✗'}`);

        // Take screenshots at different scroll positions
        for (let i = 0; i < numScrolls; i++) {
            const scrollY = i * viewportHeight;
            const screenshotName = `scroll_${String(i).padStart(3, '0')}_${scrollY}px.png`;
            
            // Scroll to position
            await page.evaluate((scrollTo) => {
                window.scrollTo(0, scrollTo);
            }, scrollY);

            // Wait for images to load
            await new Promise(r => setTimeout(r, 500));

            // Take screenshot
            await page.screenshot({ path: path.join(resultsDir, screenshotName) });
            
            // Check visible elements
            const visibleElements = await page.evaluate(() => {
                const viewport = {
                    top: window.scrollY,
                    bottom: window.scrollY + window.innerHeight
                };
                
                const portfolioItems = document.querySelectorAll('.portfolio-item');
                let visibleCount = 0;
                let loadedCount = 0;
                
                portfolioItems.forEach(item => {
                    const rect = item.getBoundingClientRect();
                    const absTop = rect.top + window.scrollY;
                    const absBottom = absTop + rect.height;
                    
                    if (absBottom > viewport.top && absTop < viewport.bottom) {
                        visibleCount++;
                    }
                    
                    const img = item.querySelector('img');
                    if (img && img.complete) {
                        loadedCount++;
                    }
                });
                
                return { visibleCount, loadedCount, totalItems: portfolioItems.length };
            });

            const status = `✓ Scroll ${i + 1}/${numScrolls}`;
            console.log(`${status} - Position: ${scrollY}px | Visible: ${visibleElements.visibleCount} items | Loaded: ${visibleElements.loadedCount}/${visibleElements.totalItems}`);
            
            results.push({
                screenshot: screenshotName,
                scrollPosition: scrollY,
                visibleElements,
                status: 'captured'
            });
        }

        // Final checks
        console.log(`\n🔍 Final Page Analysis:`);
        
        const pageTitle = await page.title();
        console.log(`  - Title: ${pageTitle}`);
        
        const allImages = await page.$$('img');
        console.log(`  - Total images: ${allImages.length}`);
        
        const loadedImages = await page.evaluate(() => {
            return document.querySelectorAll('img').length;
        });
        console.log(`  - Images in DOM: ${loadedImages}`);

        // Check for console errors
        const consoleMessages = [];
        page.on('console', msg => {
            if (msg.type() === 'error') {
                consoleMessages.push(msg.text());
            }
        });

        // Save results summary
        const summary = {
            timestamp: new Date().toISOString(),
            pageHeight,
            viewportSize: viewport,
            screenshotCount: results.length,
            results,
            checks: {
                header: !!hasHeader,
                footer: !!hasFooter,
                portfolioGrid: !!hasPortfolio,
                portfolioItemCount: portfolioItems.length,
                worksLink: !!hasWorks
            }
        };

        fs.writeFileSync(
            path.join(resultsDir, 'test_summary.json'),
            JSON.stringify(summary, null, 2)
        );

        console.log(`\n✅ Test Complete!`);
        console.log(`📁 Results saved to: ${resultsDir}/`);
        console.log(`📊 Summary: ${results.length} screenshots captured`);
        
        return { success: true, results, summary };

    } catch (error) {
        console.error('❌ Error during testing:', error.message);
        return { success: false, error: error.message };
    } finally {
        await browser.close();
    }
}

comprehensiveTest().then(result => {
    process.exit(result.success ? 0 : 1);
}).catch(err => {
    console.error('Fatal error:', err);
    process.exit(1);
});
