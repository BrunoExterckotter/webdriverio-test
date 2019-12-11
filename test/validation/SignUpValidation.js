const assert = require('assert');
const SignUpPage = require('../pages/signUpPage.js');

class SignUpValidation {

    async validaCamposFormularioVisiveis() {
        await this.validaCampoCpfVisivel();
        await this.validaCampoNomeVisivel();
        await this.validaCampoDataNascimentoVisivel();
        await this.validaCampoEmailVisivel();
        await this.validaCampoSenhaVisivel();
    }

    async validaValorCampoCpf(cpfEsperado) {
        let elCampoCpf = await SignUpPage.getElCampoCpf();
        assert.strictEqual(await elCampoCpf.getValue(), cpfEsperado, 'O valor do campo CPF está diferente do informado na tela ENTRAR!');
    }

    async validaCampoCpfVisivel() {
        let elCampoCpf = await SignUpPage.getElCampoCpf();
        assert.strictEqual(await elCampoCpf.isDisplayed(), true, 'Campo CPF não está visivel na tela!');
    }

    async validaCampoNomeVisivel() {
        let elCampoNome = await SignUpPage.getElCampoNome();
        assert.strictEqual(await elCampoNome.isDisplayed(), true, 'Campo NOME não está visivel na tela!');
    }

    async validaCampoDataNascimentoVisivel() {
        let elCampoDataNascimento = await SignUpPage.getElCampoDataNascimento();
        assert.strictEqual(await elCampoDataNascimento.isDisplayed(), true, 'Campo DATA DE NASCIMENTO não está visivel na tela!');
    }

    async validaCampoEmailVisivel() {
        let elCampoEmail = await SignUpPage.getElCampoEmail();
        assert.strictEqual(await elCampoEmail.isDisplayed(), true, 'Campo EMAIL não está visivel na tela!');
    }

    async validaCampoSenhaVisivel() {
        let elCampoSenha = await SignUpPage.getElCampoSenha();
        assert.strictEqual(await elCampoSenha.isDisplayed(), true, 'Campo SENHA não está visivel na tela!');
    }

}

module.exports = new SignUpValidation()