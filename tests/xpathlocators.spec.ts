import{test,expect,Locator} from'@playwright/test';

test("Verify xpath locators",async({page})=>{

    await page.goto("https://demo.nopcommerce.com")
/*
    //1. Absolute xpath

    const absolutelogo:Locator = page.locator("//html[1]/body[1]/div[6]/header[1]/div[2]/div[1]/a[1]/img[1]");
    await expect(absolutelogo).toBeVisible();

    //2. Relative xpath
    const relativelogo:Locator = page.locator("//img[@alt='nopCommerce demo store']");
    await expect(relativelogo).toBeVisible();

    //3. contains

    const products:Locator = page.locator("//h2/a[contains(@href,'computer')]");
    const productcount = await products.count();
    console.log("Total products: " + productcount);
    await expect(productcount).toBeGreaterThan(0);
*/
/*await page.getByRole('button', { name: 'Gift Cards' }).click();

    const giftcards:Locator = page.locator("//h2/a[contains(@href,'card')]");
    const giftcardcount = await giftcards.count();
    console.log("Total gift cards: " + giftcardcount);
    await expect(giftcardcount).toBeGreaterThan(0); 

    console.log("first product with computer", await giftcards.first().textContent());
    console.log("last product with computer", await giftcards.last().textContent()); 

    let gifttitles:string[] = await giftcards.allTextContents();

    for(let pt of gifttitles){
        console.log(pt);
    }*/

        


})