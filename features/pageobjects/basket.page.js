'use strict';
var expect = require('chai').expect; 
const ProductsPage = require('../pageobjects/products.page');

module.exports = class BasketPage extends ProductsPage {
    /**
     * @global value is a gloable where I store the result and use in other function
     */
     value = null;

     /**
      * @function clickBasketIcon() will allows us to open basket page
      */

    get clickBasketIcon() { return $('#shopping_cart_container') }
    basket() {
        return this.clickBasketIcon.click();
    }  

    /**
     * @function removeCheapItemOnBasket() will allows us to remove the cheapest item from the basket
     */

    removeCheapItemOnBasket() {
        let arrayElement = [];
        const basketElement = $$('.inventory_item_price');
        basketElement.map((element) => {
            const news = element.getText();
            arrayElement.push(news)
        })
        const j = arrayElement.map(Number);
        expect(j.length).to.equal(2);
        this.value = j;
        const min =  Math.min.apply(null, j.filter(Boolean));
       return  (($$('.cart_button'))[j.indexOf(min)]).click(); 
    }

    /**
     * @function afterRemovingCheapestProduct() will check whether the cheapest product is removed or not
     * if removed test will pass if not test will fail
     * I am also using Conditional operator to log success or fail
     */

    afterRemovingCheapestProduct(){
        let arrayElement = [];
        const basketElement = $$('.inventory_item_price');
        basketElement.map((element) => {
            const news = element.getText();
            arrayElement.push(news)
        });
        const j = arrayElement.map(Number);
        this.value[1] != j[0] ? console.log("Please look on basket page product not removed successfully") : console.log("Successfully removed cheap product");
     return expect(this.value[1]).to.equal(j[0])
    }

    /**
     * @function clickCheckoutBtnOnBasketPage()  will click button on the basket page 
     */

    clickCheckoutBtnOnBasketPage() {
        return ($('.btn_action.checkout_button')).click()        
    }

}
