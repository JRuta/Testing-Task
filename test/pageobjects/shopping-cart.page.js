const Page = require('./page');


class ShoppingCart extends Page {

    get checkoutBtn() { return $('.btn.standard-checkout.tocheckout') }

    get submitGuestBtn() { return $('.submitGuest') }

    get deliveryBtn() { return $('.carrierItemId_72') }

    get continueBtn() { return $('.isSelectCarrier') }

    get addressForm() { return $('#shippingAddressFrom') }

    get firstNameInput() { return $('#firstname') }
    get lastNameInput() { return $('#lastname') }
    get emailInput() { return $('#email') }
    get phoneInput() { return $('#phone_mobile') }
    get cityList() { return $('.cityField') }
    get cityOption() { return $('//*[contains(@id, "Akmenės")]') }
    get deliveryPoint() { return $('.pointField') }
    get pointOption() { return $('//*[contains(@id, "2402")]') }

    get formSubmitBtn() { return $('.btn.standard-checkout') }

    get paymentForm() { return $('#paymentFrom') }

    get payseraPayment() { return $('label[for="payment_method_paysera"]') }

    get braintreejsPayment() { return $('label[for="payment_method_braintreejs"]') }

    get showMorePaymentsBtn () { return $('.showMorePayments') }

    get payOnDeliveryPayment() { return $('label[for="payment_method_cashondelivery"]') }

    get paypalPayment() { return $('label[for="paypal"]') }
    
    get paymentSubmitBtn() { return $('.paymentSubmit.selectedPay') }

    open () {
        return super.open('/krepselis');
    }

}

module.exports = new ShoppingCart();
