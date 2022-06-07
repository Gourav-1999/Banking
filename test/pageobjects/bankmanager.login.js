const Page = require('./page');
var chai = require('chai');
var assert = chai.assert;
const Locators = require('../../Config/Locators')
const MangData = require('../../Config/ManagerData')
class managerLogin extends Page{
    get bankManagerLoginBtn(){
        return $(Locators.bankManagerLoginBtn)
    }
    get addCustomerBtn(){
        return $(Locators.addCustomerBtn)
    }
    get firstName(){
        return $(Locators.firstName)
    }
    get lastName(){
        return $(Locators.lastName)
    }
    get postCode(){
        return $(Locators.postCode)
    }
    get customersBtn(){
        return $(Locators.customersBtn)
    }
    get searchCustomer(){
        return $(Locators.searchCustomer)
    }
    get customerNameData(){
        return $(Locators.customerNameData)
    }
    get customerPostData(){
        return $(Locators.customerPostData)
    }
    get deleteButton(){
        return $(Locators.deleteButton)
    }

    get openAccount(){
        return $(Locators.openAccount)
    }
    get clickSelectCustomer(){
        return $(Locators.clickSelectCustomer)
    }
    get clickSelectCurrency(){
        return $(Locators.clickSelectCurrency)
    }
    get processBtn(){
        return $(Locators.processBtn)
    }
    async addCustomer(){
        await this.bankManagerLoginBtn.click();
        await this.addCustomerBtn.click();
        await this.firstName.setValue(MangData.firstName);
        await this.lastName.setValue(MangData.lastName);
        await this.postCode.setValue(MangData.postCode);
        await this.accept_alert;
    }
    async customer(){
        await this.customersBtn.click();
        await this.searchCustomer.setValue(MangData.searchCustomerforDelete);
        let a = await this.customerNameData.getText();
        assert.equal(a,MangData.searchCustomerforDelete)
        let b = await this.customerPostData.getText();
        assert.equal(b,MangData.customerPostcode)
        await this.deleteButton.click();
    }
    async Account(){
        await this.openAccount.click();
        let item1 = await this.clickSelectCustomer;
        item1.click();
        await item1.selectByVisibleText(MangData.selectCustomerName)
        let item2 = await this.clickSelectCurrency;
        item2.click();
        await item2.selectByVisibleText(MangData.selectCustomerCurrency)
        await this.processBtn.click();
        await this.accept_alert;
    }
    open() {
        return super.open('login');
    }
}
module.exports = new managerLogin();