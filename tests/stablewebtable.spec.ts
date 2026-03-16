import {test, expect,Locator} from '@playwright/test';

test('static web table', async ({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
   const table:Locator = await page.locator("table[name='BookTable']")

   await expect(table).toBeVisible();

   //row couunt
   const rows:Locator = await table.locator('tr');
 await expect(rows).toHaveCount(7);

 //cloumns/hearders
    const headers:Locator = await rows.locator('th');
    await expect(headers).toHaveCount(4);
    console.log('Headers', await headers.count()); 
 // Read all data from second row
 
 const secondRow:Locator = await rows.nth(2).locator('td')
 const secondRowData: string[] = await secondRow.allTextContents();
    console.log('Data from second row:', secondRowData);

    await expect(secondRowData).toEqual(['Learn Java', 'Mukesh', 'Java', '500']);    

for(let data of secondRowData){
console.log(data);      
}
 //Print all data from the table (excluding header)

 const allRowData = await rows.all()

 console.log('BookName Author Subject Price');

for(let row of allRowData.slice(1)){ // Exclude header row
   // const col: string[] = await row.locator('td').allTextContents();

        const col: string[] = await row.locator('td').allInnerTexts();

    console.log(col); // Print columns separated by space

}

//Print booknames where auther is mukesh
for(let row of allRowData.slice(1)){ // Exclude header row
   // const col: string[] = await row.locator('td').allTextContents();

        const col: string[] = await row.locator('td').allInnerTexts();

    if(col[1] === 'Mukesh'){
        console.log('Book name with author Mukesh:', col[0]); // Print book name
}
}

})