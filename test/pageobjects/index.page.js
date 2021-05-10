const Page = require('./page');

class IndexPage extends Page {
    
    get searchInput() { return $('#search_query_block') }
    get searchButton() { return $('#searchbox button') }

    get searchItem() { return $('a[title="Keune Care Line Color Brillianz Šampūnas dažytiems plaukams 300ml"]') }

    
 open () {
     return super.open('/');
    }

    async acceptCookies() {
        await (await $('#CybotCookiebotDialogBody')).waitForDisplayed();
        await browser.pause(500);
        await (await $('#CybotCookiebotDialogBodyButtonAccept')).click();
        
    }
}

module.exports = new IndexPage();
