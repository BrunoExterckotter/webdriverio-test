class Page {
    open(path) {
        //http://www.serasaconsumidor.com.br/
        browser.url(path);
    }
}

module.exports = Page;
