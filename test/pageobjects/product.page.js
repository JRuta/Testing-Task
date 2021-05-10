const Page = require('./page');


class ProductPage extends Page {

    get addtoCartBtn() {return $('#add_to_cart button')}

    get checkCartBtn() {return $('#layer_cart .btn-checkout')}

    open () {
        return super.open('/keune-care-line-color-brillianz-sampunas-dazytiems-plaukams');
    }
}

module.exports = new ProductPage();
