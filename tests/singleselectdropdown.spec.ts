
import {test,expect,Locator} from '@playwright/test';

test('Single Select Dropdown', async ({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    //1. Select option from dropdown by using selectOption() method

    //await page.locator('#country').selectOption('Canada');//by visible text
    //await page.locator('#country').selectOption({value:'uk'}); //by value
    //await page.locator('#country').selectOption({index:2}); //by index
    //await page.locator('#country').selectOption({label:'India'}); //by label

    //2. check number of options in dropdown (count)

    const dropdownoptions:Locator = page.locator('#country>option');
    const count: number =await dropdownoptions.count();

    expect(count).toBe(10);

    //3. Check an option present in dropdown

    const optionstext: string[] = (await dropdownoptions.allTextContents()).map(text=>text.trim());
    console.log(optionstext);
    
});