import { test, expect } from "@playwright/test";
import { PomManager } from "../pages/pommanager";


test.describe("login", () => {

    let pom: PomManager;

    

    test.beforeEach(async ({ page }) => {

        pom = new PomManager(page);

        await pom.Login.navigate();
    });


test("Valid Login", async ({ page }) => {

  

    await page.locator("#login2").click();

   

    await pom.Login.login(
        "ziad",
        "1234"
    );

    await expect(page.locator("#nameofuser")).toHaveText("Welcome ziad")
});



test("inValid Login", async ({ page }) => {

  

    await page.locator("#login2").click();

   

    await pom.Login.login(
        "ziad",
        "12348888"
    );

page.once("dialog", async (dialog) => {
        expect(dialog.message()).toBe("Wrong password.");
        await dialog.accept();

         });


});





 








})