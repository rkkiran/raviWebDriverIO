module.exports = class Page {
    /**
    * @function open() Opens a sub page of the page
    */
    open() {
        return browser.url(`https://www.saucedemo.com/`)
    }
}
