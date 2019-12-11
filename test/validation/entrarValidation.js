const assert = require('assert');
const EntrarPage = require('../pages/entrarPage.js');

const txtPreenchaSeuCpf = 'Por favor preencha seu CPF.';
const txtInformeCpfValido = 'Você precisa informar um CPF válido.';

class EntrarValidation {

    async voltaSerasaMainPage() {
        let inputCpf = await $(elBtnVoltar);
        await inputCpf.click();
    }

    async validaMensagemPreenchaSeuCpf() {
        let elMensagemCampoCpf = await EntrarPage.getElMensagemCampoCpf();
        assert.strictEqual(await elMensagemCampoCpf.getText(), txtPreenchaSeuCpf);
    }

    async validaMensagemInformeCpfValido() {
        let elMensagemCampoCpf = await EntrarPage.getElMensagemCampoCpf();
        assert.strictEqual(await elMensagemCampoCpf.getText(), txtInformeCpfValido);
    }
}

module.exports = new EntrarValidation()