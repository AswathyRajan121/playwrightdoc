import {test, expect, Locator} from '@playwright/test';

test('Auto suggest dropdown',async ({page}) => {
await page.goto('https://www.flipkart.com/');
//await page.locator('input[name="q"]').fill('mobiles')

await page.locator('input:visible').fill('mobiles');

await page.waitForTimeout(5000);
//get all the suggested options -->ctrl+shift+p emulate focused page 

const options:Locator = await page.locator('ul>li');

const optionscount = await options.count();

console.log('Total options: ', optionscount);

await page.waitForTimeout(2000); 

console.log('5th option: ', await options.nth(5).innerText());


// print all the options
for(let i=0; i<optionscount; i++){
    console.log(await options.nth(i).innerText());
}

//print a particular option
for(let i=0; i<optionscount; i++){
    if(await options.nth(i).innerText() === 'mobiles under 10000'){

      options.nth(i).click();
        break;
    }
}
})