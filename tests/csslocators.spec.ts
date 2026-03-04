import {test,expect,Locator} from '@playwright/test';

test("Verify css locators",async({page})=>{ 

    await page.goto("https://demo.nopcommerce.com")

    const logo:Locator = page.locator("html>body>div>header>div.header-lower>div>a")
await expect
    const searchbox:Locator = page.locator("input#small-searchterms");
    await expect(searchbox).toBeVisible();
    await searchbox.fill("laptop");
     
    const searchbutton:Locator = page.locator("button[type='submit']");
 await searchbutton.click();
 await page.waitForTimeout(5000);
})