import {test,expect,Locator} from '@playwright/test';

test("Text input actions",async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")
    const textbox:Locator = page.locator("#name")

    await expect(textbox).toBeVisible()
    await expect(textbox).toBeEnabled()
    await textbox.fill("John Doe")
const textvalue:string = await textbox.inputValue()
await expect(textvalue).toBe("John Doe");
})

test("check boxes and radio buttons",async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
 const femaleradiobutton:Locator = page.getByLabel("Female")
    await expect(femaleradiobutton).toBeVisible()
    await expect(femaleradiobutton).toBeEnabled()
    await femaleradiobutton.check()
    await expect(femaleradiobutton).toBeChecked();

})

test.only("check boxex test",async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")

    //1. select specific checkbox sunday and assert

  /*  const sundaycheckbox:Locator = page.getByLabel("Sunday")
    await expect(sundaycheckbox).toBeVisible()
    await sundaycheckbox.check()
    await expect(sundaycheckbox).toBeChecked()*/

    //2.Select all checkboxes and assert each is checked
    const days:string[] = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    const checkboxes:Locator[] = days.map(index => page.getByLabel(index))
    
    for(const checkbox of checkboxes) {
        await checkbox.check()
        await expect(checkbox).toBeChecked()
    }

    //4.Uncheck last 4 checkboxes and assert each is unchecked

    for(const checkbox of checkboxes.slice(-4)) {
        await checkbox.uncheck()
        await expect(checkbox).not.toBeChecked()
    }

    //5.Toggle checkboxes and assert their state

 for(const checkbox of checkboxes) {

       if(await checkbox.isChecked()) {
        await checkbox.uncheck()
        await expect(checkbox).not.toBeChecked()
       } else {
        await checkbox.check()
        await expect(checkbox).toBeChecked()
       }
    }
 
    //6. Select the checkbox based on labesl text and assert
    const weekname:string = "Sunday"

    for (const label of days) {
if(label.toLowerCase() === weekname.toLowerCase()) 
    {
        const checkbox:Locator = page.getByLabel(label)
        await checkbox.check()
        await expect(checkbox).toBeChecked()
    }
}
    await page.waitForTimeout(5000);
})


