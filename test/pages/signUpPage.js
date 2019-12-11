const assert = require('assert');
const elFormulario = '#sign_up_form';
const elCpf = '//form[@id="sign_up_form"]//input[@id="cpf"]';
const elNome = '#name';
const elDataNascimento = '#birthDate';
const elEmail = '#email';
const elSenha = '#password';

class SignUpPage {

    async aguardaFormularioEstarVisivel() {
        const formCriarConta = await browser.$(elFormulario);
        try {
            await formCriarConta.waitForDisplayed();
        } catch (error) {
            assert.fail('O formulário para criação de conta não está visível!');
        }
    }

    async getElCampoCpf() {
        return await $(elCpf);
    }

    async getElCampoNome() {
        return await $(elNome);
    }

    async getElCampoDataNascimento() {
        return await $(elDataNascimento);
    }

    async getElCampoEmail() {
        return await $(elEmail);
    }

    async getElCampoSenha() {
        return await $(elSenha);
    }

}

module.exports = new SignUpPage()