const BasketPage = require('./basket.page')
class CheckOutPage extends BasketPage {
    /**
     * @function onCheckoutPage() will return element on checkp
     */
    onCheckoutPage() {
        return ($('.subheader'));
    }
}
module.exports = new CheckOutPage;