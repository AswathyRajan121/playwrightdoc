import {test, expect, Locator} from '@playwright/test';

test('Sorted Dropdown', async ({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    const dropDownOptions:Locator = await page.locator('#colors>option');
    //const dropDownOptions:Locator = await page.locator('#animals>option');

const optionsText: string[] = (await dropDownOptions.allTextContents()).map(text=>text.trim());

const originalList: string[] =[...optionsText];

const sortedList: string[] = [...optionsText].sort();

console.log('Original List: ', originalList);
console.log('Sorted List: ', sortedList);

});