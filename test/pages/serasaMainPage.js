const elBtnEntrar = '//*[@id="__next"]//button[text()="Entrar"]';

class SerasaMainPage {

    async openUrl() {
        await browser.url('https://serasaconsumidor.com.br');
        await browser.maximizeWindow();
    }

    async entrar() {
        const btnEntrar = await $(elBtnEntrar)
        await btnEntrar.click();
    }
}

module.exports = new SerasaMainPage()