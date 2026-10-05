import { test, expect } from "@playwright/test";
import { PomManager } from "../pages/pommanager";

test.describe("Sign up", () => {

    let pom: PomManager;

    test.beforeEach(async ({ page }) => {

        pom = new PomManager(page);

        await pom.signup.navigate();
    });

    ////////////////////////////////////////////////////////

    test("Valid Signup", async ({page}) => {

         await page.locator("#signin2").click();


        await pom.signup.login(
            "ziad344",
            "123"
        );

           page.once("dialog", async (dialog) => {
        expect(dialog.message()).toBe("Sign up successful.");
        await dialog.accept();
    });

    });


 test("inValid Signup-missing name", async ({page}) => {

         await page.locator("#signin2").click();


        await pom.signup.login_withoutname(
            
            "123"
        );

           page.once("dialog", async (dialog) => {
        expect(dialog.message()).toBe("Please fill out Username and Password.");
        await dialog.accept();
    });

});


 test("Valid Signup-missing password", async ({page}) => {

         await page.locator("#signin2").click();


        await pom.signup.login(
            "ziad001",
            "123"
        );

           page.once("dialog", async (dialog) => {
        expect(dialog.message()).toBe("Please fill out Username and Password.");
        await dialog.accept();
    });

    


    
    });


});