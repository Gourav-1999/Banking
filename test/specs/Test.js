const CustPage = require('../pageobjects/customer.login');
const MangPage = require('../pageobjects/bankmanager.login');
describe('Banking Online Website', ()=>{
    it('Test Customer Function', async()=>{
        await CustPage.open();
        await CustPage.customerLoginTest();
        await CustPage.Deposit();
        await CustPage.Withdraw();
        await CustPage.Transaction();
        await CustPage.logout();
    })
    it('Test Manager Function', async()=>{
        await MangPage.open();
        await MangPage.addCustomer();
        await MangPage.customer();
        await MangPage.Account();
    })
})