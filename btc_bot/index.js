// index.js
const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({ headless: false }); 
  const page = await browser.newPage();

  await page.goto("https://probo.in/", { waitUntil: "networkidle2" });


  await page.goto("https://probo.in/markets/your-market-id", {
    waitUntil: "networkidle2",
  });


  while (true) {
    try {
     
      const yesPrice = await page.$eval(".yes-price-selector", el =>
        parseInt(el.textContent.replace("₹", "").trim())
      );

      const noPrice = await page.$eval(".no-price-selector", el =>
        parseInt(el.textContent.replace("₹", "").trim())
      );

      console.log(`YES: ₹${yesPrice} | NO: ₹${noPrice}`);

      // === Your Strategy ===
      if (yesPrice <= 40) {
        console.log("✅ Buying YES...");
        await page.click("#buy-yes-"); 
      }

      if (noPrice >= 65) {
        console.log("✅ Selling NO");
        await page.click("#sell-no-button"); 
      }

      await new Promise(r => setTimeout(r, 10000));
    } catch (err) {
      console.error("Error:", err.message);
      await new Promise(r => setTimeout(r, 2000));
    }
  }
})();
