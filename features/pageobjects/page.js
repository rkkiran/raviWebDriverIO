module.exports = class Page {
    /**
    * @function open() Opens a sub page of the page
    */
    open() {
         browser.url(`https://www.saucedemo.com/`);
         return browser.pause(5000);
    }
}
