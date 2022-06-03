const CustPage = require('../pageobjects/customer.login');
describe('Customer Login Test', ()=>{
    it('Test Customer Function', async()=>{
        await CustPage.open();
        await CustPage.customerLoginTest();
        await CustPage.Deposit();
        await CustPage.Withdraw();
        await CustPage.Transaction();
        await CustPage.logout();
    })
})