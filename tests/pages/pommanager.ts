import { Page } from "@playwright/test";
import { signup } from "./Signup";
import { Login, login } from "./Login";
import { Cart} from "./Cart";

export class PomManager {

    readonly page: Page;
    readonly Login: Login;
    readonly signup: signup;
    readonly cart:Cart ;

    constructor(page: Page) {

        this.page = page;

        this.signup = new signup(page);
        this.Login = new Login(page);
        this.cart=new Cart(page)
    }
}