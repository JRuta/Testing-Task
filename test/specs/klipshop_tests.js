const indexPage = require('../pageobjects/index.page');
const productPage = require('../pageobjects/product.page');
const shoppingCartPage = require('../pageobjects/shopping-cart.page');

describe('KlipShop e-shop', () => {
    it('should find correct item using search', async () => {
        await indexPage.open();
        await indexPage.acceptCookies();

        await (await indexPage.searchInput).setValue('Keune Color Brillianz Šampūnas');
        await (await indexPage.searchButton).click();

        expect(await indexPage.searchItem).toBeDisplayed();
    });
    
    it('should add item to shopping cart', async () => {
        await productPage.open();

        await (await productPage.addtoCartBtn).click();
        await (await productPage.checkCartBtn).waitForDisplayed();
        await (await productPage.checkCartBtn).click();

        const product = $('*=Keune Care Line Color Brillianz Šampūnas dažytiems plaukams');
        await (await product).waitForDisplayed();

        expect(await product).toBeDisplayed();

    })

    it('should allow to checkout', async () => {
        await shoppingCartPage.open();

        await (await shoppingCartPage.checkoutBtn).click();

        await (await shoppingCartPage.submitGuestBtn).waitForDisplayed();
        await (await shoppingCartPage.submitGuestBtn).click();

        await (await shoppingCartPage.deliveryBtn).waitForDisplayed();
        await (await shoppingCartPage.deliveryBtn).click();
        await (await shoppingCartPage.continueBtn).click();
        
        await (await shoppingCartPage.addressForm).waitForDisplayed();

        await (await shoppingCartPage.firstNameInput).setValue('Test');
        await (await shoppingCartPage.lastNameInput).setValue('Testing');
        await (await shoppingCartPage.emailInput).setValue('test@test.com');
        await (await shoppingCartPage.phoneInput).setValue('860111111');
        await (await shoppingCartPage.cityList).click();
        await (await shoppingCartPage.cityOption).waitForDisplayed();
        await (await shoppingCartPage.cityOption).click();
        await browser.pause(100);

        await (await shoppingCartPage.deliveryPoint).click();
        await (await shoppingCartPage.pointOption).waitForDisplayed();
        await (await shoppingCartPage.pointOption).click();
        await browser.pause(100);

        await(await shoppingCartPage.formSubmitBtn).click();
        
        expect (await shoppingCartPage.paymentForm).toBeDisplayed();

        await (await shoppingCartPage.payseraPayment).isDisplayed();
        await (await shoppingCartPage.braintreejsPayment).isDisplayed();

        await(await shoppingCartPage.showMorePaymentsBtn).click();

        await (await shoppingCartPage.payOnDeliveryPayment).isDisplayed();

        await (await shoppingCartPage.paypalPayment).isDisplayed();

        await (await shoppingCartPage.payOnDeliveryPayment).click();
        
        expect (await shoppingCartPage.paymentSubmitBtn).toBeDisplayed();

      // payment process was not finished 



    })

});
