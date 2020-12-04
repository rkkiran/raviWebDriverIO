const { Given, When, Then } = require('cucumber');
const Saucedemo = require('../pageobjects/checkout.page');


Given(/^I am on saucedemo login page$/, () => {   
    Saucedemo.open();
    browser.pause(5000);
});

When(/^I login with '(.*)' and '(.*)'/, (username, password) => {
    Saucedemo.login(username, password);
});

When(/^I am on '(.*)' page I Sort the products by Price from drop down high to low$/, (message) => {
    expect( Saucedemo.flashAlert).toHaveTextContaining(message);
    Saucedemo.selectHighToLow();
});

When(/^I Add the two cheapest products to the basket$/, () => {
    Saucedemo.addTwoCheapItemToBasket();
});

When(/^I Open the basket$/, () => {
    Saucedemo.basket();
});

When(/^I Remove the cheapest product from the basket$/, () => {
    Saucedemo.removeCheapItemOnBasket();
});

Then(/^cheapest product should be removed successfully$/, () => {
    Saucedemo.afterRemovingCheapestProduct();
});

Then(/^I click on Checkout and I need to see '(.*)' text on header$/, (message) => {
    Saucedemo.clickCheckoutBtnOnBasketPage();
    expect(Saucedemo.onCheckoutPage()).toHaveText(message);
});

Then(/^I should see a flash message saying '(.*)'$/, (message) => {
    console.log(message);
   expect(Saucedemo.errorMesageForInvalidUser()).toHaveText(message)

})

