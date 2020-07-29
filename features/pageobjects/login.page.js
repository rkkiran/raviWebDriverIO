const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
module.exports =  class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername () { return $('#user-name') }
    get inputPassword () { return $('#password') }
    get btnSubmit () { return $('#login-button') }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    login (username, password) {
        this.inputUsername.setValue(username);
        this.inputPassword.setValue(password);
        this.btnSubmit.click(); 
    }

    /**
     * @function open will open browser maxmize window and then 
     * open https://www.saucedemo.com/ login page
     */
    open () {
        browser.maximizeWindow();
        return super.open();
    }

    /**
     * @function errorMesageForInvalidUser() return erroe message element
     */

    errorMesageForInvalidUser() {
        return $('.//*[contains(@data-test, "error")]')
    }
}
