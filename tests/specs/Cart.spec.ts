import { test, expect } from "@playwright/test";
import { PomManager } from "../pages/pommanager";

test.describe("Sign up", () => {

    let pom: PomManager;

    test.beforeEach(async ({ page }) => {

        pom = new PomManager(page);

        await pom.signup.navigate();
    });


test("addtocart", async ({page}) => {

await pom.cart.addtocart()

await page.locator("#name").fill("ziad")
await page.locator("#card").fill("123")
await page.getByRole("button",{name:'Purchase'}).click()

await expect(  
    page.getByRole('heading', { name: 'Thank you for your purchase!' })
).toHaveText('Thank you for your purchase!');

})


 test("failaddtocart-missing name", async ({page}) => {

await pom.cart.addtocart()


await page.locator("#card").fill("123")
await page.getByRole("button",{name:'Purchase'}).click()

 
       page.once("dialog", async (dialog) => {
        expect(dialog.message()).toBe("This user already exist.");
        await dialog.accept();
    })

})


 test("failaddtocart-Card number", async ({page}) => {

await pom.cart.addtocart()


await page.locator("#card").fill("123")
await page.getByRole("button",{name:'Purchase'}).click()

 
       page.once("dialog", async (dialog) => {
        expect(dialog.message()).toBe("Please fill out Name and Creditcard.");
        await dialog.accept();
    })

})



})
