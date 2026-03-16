import {test, Locator , expect} from '@playwright/test';

test('Comparing methods', async ({page}) => {

    await page.goto('https://www.flipkart.com/');
// 1 inner text vs text content 
    await page.locator('input:visible').fill('mobiles');

    const options:Locator = await page.locator('ul>li');
await page.waitForTimeout(5000);

console.log (await options.nth(1).innerText());
console.log (await options.nth(1).textContent());


})