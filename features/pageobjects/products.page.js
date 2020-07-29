const LoginPage = require('./login.page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
module.exports =  class ProductsPage extends LoginPage {
    /**
     * @function flashAlert&&dropDown define selectors using getter methods
     */
    get flashAlert () { return $('.product_label') }
    get dropDown() { return $('.product_sort_container') }
    /**
     * @function selectHighToLow() will select the Price (high to low) option from the drop down
     */
    selectHighToLow() {
        return this.dropDown.selectByIndex(3);
    }

    /**
     * @function addTwoCheapItemToBasket() will add two cheap iteams to cart by from the array object
     */

   addTwoCheapItemToBasket() {
       let arrayElement = [];
       const elm =  $$('.inventory_item_price');
    elm.map((element) => {
        const news = element.getText();
        arrayElement.push(news.substr(1));
    });
    const j = arrayElement.map(Number)
    const min = Math.min.apply(null, j.filter(Boolean));
    const secondMin = Math.min.apply(null, j.filter(n => n != min));
     (($$('.btn_primary.btn_inventory'))[j.indexOf(Math.min.apply(null, j))]).click();
     return (($$('.btn_primary.btn_inventory'))[j.indexOf(secondMin)]).click()
   }

}
