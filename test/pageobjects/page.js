/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
module.exports = class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    open (path) {
        return browser.url(`https://www.globalsqa.com/angularJs-protractor/BankingProject/#/${path}`)
    }
    wait(){
        return browser.pause(10000);
    }
    accept_alert(){
        return browser.acceptAlert();
    }
}
