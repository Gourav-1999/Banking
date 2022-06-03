const Page = require('./page');
var chai = require('chai');
var assert = chai.assert;
const Locators = require('../../Config/Locators')
const Data = require('../../Config/Data')
class customerLogin extends Page {
    get custLogin() {
        return $(Locators.custLogin)
    }
    get userName() {
        return $(Locators.userName)
    }
    get loginBtn() {
        return $(Locators.loginBtn)
    }
    get accName() {
        return $(Locators.accName)
    }
    get data1() {
        return $(Locators.data1)
    }
    get transButton() {
        return $(Locators.transButton)
    }
    get deposButton() {
        return $(Locators.deposButton)
    }
    get depositAmount() {
        return $(Locators.depositAmount)
    }
    get depotBtn() {
        return $(Locators.depotBtn)
    }
    get withdrButton() {
        return $(Locators.withdrButton)
    }
    get withdrawAmount() {
        return $(Locators.withdrawAmount)
    }
    get withdraw() {
        return $(Locators.withdraw)
    }
    get Msg() {
        return $(Locators.Msg)
    }
    get backButton() {
        return $(Locators.backButton)
    }
    get resetButton() {
        return $(Locators.resetButton)
    }
    get transactionData() {
        return $(Locators.transactionData)
    }
    get logoutBtn() {
        return $(Locators.logoutBtn)
    }
    get homeBtn() {
        return $(Locators.homeBtn)
    }
    get transactionType1() {
        return $(Locators.transactionType1)
    }
    get transactionType2() {
        return $(Locators.transactionType2)
    }

    async customerLoginTest() {
        await this.custLogin.click();

        let items = await this.userName
        items.click();

        await items.selectByVisibleText(Data.userName)
        await this.loginBtn.click();

        let acc = await this.accName
        acc.click();
        await acc.selectByVisibleText(Data.accountName)

        let data = await this.data1.getText()
        assert.equal(data, Data.accountName)
    }
    async Transaction() {
        await this.transButton.click();
        let type1 = await this.transactionType1;
        let type2 = await this.transactionType2;
        if (type1.isDisplayed()) {
            let dt1 = await this.transactionType1.getText();
            assert.equal(dt1, "Credit")
        }
        if (type2.isDisplayed()) {
            let dt2 = await this.transactionType2.getText();
            assert.equal(dt2, "Debit")
        }
        await this.resetButton.click();
        await this.backButton.click();
    }
    async Withdraw() {
        await this.withdrButton.click();
        await this.withdrawAmount.setValue(Data.withdrawAmt);
        await this.withdraw.click();
        let f = await this.Msg.getText();
        assert.equal(f, "Transaction successful")
    }
    async Deposit() {
        await this.deposButton.click()
        await this.depositAmount.setValue(Data.depositAmt)
        await this.depotBtn.click();
        let m = await this.Msg.getText();
        assert.equal(m, "Deposit Successful")
    }
    async logout() {
        await this.logoutBtn;
    }

    wait() {
        return super.wait();
    }
    open() {
        return super.open('login');
    }
}
module.exports = new customerLogin();