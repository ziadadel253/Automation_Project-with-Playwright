import { Page, Locator } from "@playwright/test";

export class signup {

    readonly page: Page;
    readonly username: Locator;
    readonly password: Locator;
    readonly loginButton: Locator;
    readonly successMessage: Locator;

    constructor(page: Page) {

        this.page = page;

        this.username = page.locator("#sign-username");
        this.password = page.locator("#sign-password");
        this.loginButton = page.getByRole('button', { name: 'Sign up' })
        this.successMessage = page.locator("#flash");
    }

    async navigate() {
        await this.page.goto("https://www.demoblaze.com/");
    }

    async login(username: string, password: string) {
        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginButton.click();
    }

    async login_withoutname(password: string) {
        
        await this.password.fill(password);
        await this.loginButton.click();
    }
}

