import { Page, Locator } from "@playwright/test";

export class Cart{

    readonly cart : Locator
    readonly place_order:  Locator


constructor(page:Page) {


//this.page = page;

this.cart=page.locator("#cartur")
this.place_order=page.locator(".btn.btn-success")
}
async addtocart () {

await this.cart.click()
await this.place_order.click()


}
   
}

