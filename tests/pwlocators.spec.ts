import{test,expect,Locator}from'@playwright/test';

test("verify locators",async({page})=>{

   await page.goto("https://demo.nopcommerce.com")

    const logo: Locator = page.getByAltText("nopCommerce demo store");
    await expect(logo).toBeVisible();

    const text:Locator=page.getByText("Welcome to our store")
    await expect(text).toBeVisible();

    await page.getByRole('link', { name: 'Register' }).click();
    await page.getByLabel('First name:').fill('John');
 


})