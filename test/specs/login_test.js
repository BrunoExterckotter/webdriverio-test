const SerasaMainPage = require('../pages/serasaMainPage.js');
const EntrarPage = require('../pages/entrarPage.js');
const SignUpPage = require('../pages/signUpPage.js');
const EntrarValidation = require('../validation/entrarValidation.js');
const SignUpValidation = require('../validation/SignUpValidation.js');

beforeEach(async function () {
    await SerasaMainPage.openUrl();
    await SerasaMainPage.entrar();
});

afterEach(async function () {
});


describe('Entrar no Serasa Consumior', () => {
    it('sem informar CPF', async () => {
        await EntrarPage.aguardaFormularioEstarVisivel();
        await EntrarPage.confirmar();
        await EntrarValidation.validaMensagemPreenchaSeuCpf();
    })

    it('com CPF inválido', async () => {
        await EntrarPage.aguardaFormularioEstarVisivel();
        await EntrarPage.preencheFormulario(data.cpfIncorreto);
        await EntrarPage.confirmar();
        await EntrarValidation.validaMensagemInformeCpfValido();
    })

    it('com CPF válido', async () => {
        await EntrarPage.aguardaFormularioEstarVisivel();
        await EntrarPage.preencheFormulario(data.cpfCorreto);
        await EntrarPage.confirmar();
        await SignUpPage.aguardaFormularioEstarVisivel();
    })

    it('com CPF válido, validando a apresentação da tela de criação de conta', async () => {
        await EntrarPage.aguardaFormularioEstarVisivel();
        await EntrarPage.preencheFormulario(data.cpfCorreto);
        await EntrarPage.confirmar();
        await SignUpPage.aguardaFormularioEstarVisivel();
        await SignUpValidation.validaValorCampoCpf(data.cpfCorreto);
        await SignUpValidation.validaCamposFormularioVisiveis();
    })
})

let data = {
    cpfIncorreto: "123.456.789-99",
    cpfCorreto: "671.020.960-11"
};