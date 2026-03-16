import {test, expect, Locator} from '@playwright/test';

test('duplicate dropdown', async ({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/');
    const dropDownOptions:Locator = await page.locator('#colors>option');

    const optionsText: string[] = (await dropDownOptions.allTextContents()).map(text=>text.trim());

    const myset = new Set<string>(); 
    const duplicates: string[] = []; 
for (const option of optionsText) {
  if (myset.has(option)) {
    duplicates.push(option); 
  } else {
    myset.add(option); 
  } 
}

console.log('Duplicate options: ', duplicates);
})