import { Page, Locator } from "@playwright/test";

export class Login {

    readonly page: Page;
    readonly username: Locator;
    readonly password: Locator;
    readonly button: Locator;
    readonly successmessage: Locator;

    constructor(page: Page) {

        this.page = page;

        // implementation for locators
        this.username = page.locator("#loginusername");
        this.password = page.locator("#loginpassword");
        this.button = page.getByRole("button", { name: "Log in" });
        this.successmessage = page.locator("#flash");
    }

    async navigate() {
        await this.page.goto("https://www.demoblaze.com/");
    }

    async login(username: string, password: string) {
        await this.username.fill(username);
        await this.password.fill(password);
        await this.button.click();
    }
}