const puppeteer = require('puppeteer');

(async () => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    
    console.log("Tomando captura de Desktop...");
    await page.setViewport({ width: 1280, height: 800 });
    await page.goto('https://leoreyes07.github.io/bela-and-luna-petshop/', { waitUntil: 'networkidle2' });
    await page.screenshot({ path: 'public/screenshot-desktop.png' });

    console.log("Tomando captura de Mobile 1...");
    await page.setViewport({ width: 375, height: 667, isMobile: true });
    await page.goto('https://leoreyes07.github.io/bela-and-luna-petshop/', { waitUntil: 'networkidle2' });
    await page.screenshot({ path: 'public/screenshot-mobile1.png' });

    console.log("Tomando captura de Mobile 2 (Carrito / Scroll)...");
    await page.evaluate(() => window.scrollBy(0, 500));
    await new Promise(r => setTimeout(r, 500));
    await page.screenshot({ path: 'public/screenshot-mobile2.png' });

    await browser.close();
    console.log("Capturas completadas y guardadas en public/");
  } catch (err) {
    console.error("Error al tomar capturas:", err);
    process.exit(1);
  }
})();
