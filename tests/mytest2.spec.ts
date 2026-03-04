import { test, expect } from '@playwright/test';

test('verify page URL', async ({ page }) => {

await page.goto("https://practice.expandtesting.com/")

let url:string = await page.url()
console.log("Page url is: " + url);

await expect(page).toHaveURL(/expandtesting/);
});

    