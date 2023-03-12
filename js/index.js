/* 
    Objetivo - Quando Clicarmos no botão aparecer a imagem correspondente
    a imagem de fundo.

    -Passo 1 - dar um jeito de pegar o elemento HTML dos botões

    -Passo 2 - dar um jeito de identificar o clique do usuário no botão

    -Passo 3 - desmarcar o botão selecionado anteriormente

    -Passo 4- marcar o botão clicado como se estivesse selecionada

    -Passo 5- esconder imagem anterior

    -Passo 6- fazer aparecer a imagem correspondente ao botão clicado

*/
// -Passo 1 - dar um jeito de pegar o elemento HTML dos botões
const botoescarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');

// -Passo 2 - dar um jeito de identificar o clique do usuário no botão
botoescarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        // -Passo 3 - desmarcar o botão selecionado anteriormente
        desativarBotaoSelecionado();
        // -Passo 4- marcar o botão clicado como se estivesse selecionada
        selecionarBotaoCarrossel(botao);

        // -Passo 5- esconder imagem anterior
        esconderImagemAnterior();

        //-Passo 6- fazer aparecer a imagem correspondente ao botão clicado
        mostrarImagemCorrespondenteAoBotão(indice);
    })
})

function mostrarImagemCorrespondenteAoBotão(indice) {
    imagens[indice].classList.add('ativa');
}

function selecionarBotaoCarrossel(botao) {
    botao.classList.add('selecionado');
}

function esconderImagemAnterior() {
    const imagemativa = document.querySelector('.ativa');
    imagemativa.classList.remove('ativa');
}

function desativarBotaoSelecionado() {
    const botaoselecionado = document.querySelector('.selecionado');
    botaoselecionado.classList.remove('selecionado');
}
