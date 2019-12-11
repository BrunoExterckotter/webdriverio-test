const assert = require('assert');
const elBtnVoltar = '//*[@id="valgrind"]//button[text() ="Voltar"]';
const elBtnConfirmar = '//*[@id="valgrind"]//form//button[text() ="Confirmar"]';
const elInputCpf = '#cpf';
const elFormulario = '//*[@id="valgrind"]/div/div[2]/div/div';
const elMensagemCampoCpf = '//*[@id="valgrind"]//form//small';

class EntrarPage {

    async voltaSerasaMainPage() {
        const btnVoltar = await $(elBtnVoltar);
        await btnVoltar.click();
    }

    async aguardaFormularioEstarVisivel() {
        const formCPF = await browser.$(elFormulario);
        try {
            await formCPF.waitForDisplayed();
        } catch (error) {
            assert.fail('O formulário para informar o CPF não está visível!');
        }
    }

    async preencheFormulario(cpf) {
        const inputCPF = await browser.$(elInputCpf);
        await inputCPF.addValue(cpf);
        await browser.keys(['Tab']);
    }

    async confirmar() {
        const btnConfirmar = await $(elBtnConfirmar);
        await btnConfirmar.click();
    }

    async getElMensagemCampoCpf() {
        return await $(elMensagemCampoCpf);
    }
}

module.exports = new EntrarPage()