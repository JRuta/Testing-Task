
module.exports = class Page {
    open (page) {
        return browser.url(`https://klipshop.lt${page}`)
    }
}
