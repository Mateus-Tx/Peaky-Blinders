const botoes = document.querySelectorAll(".botao");
const container = document.querySelectorAll(".container");

botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
        desselecionarbotao();
        desselecionarpersonagem();

        botao.classList.add("selecionado");
        container[indice].classList.add("selecionado");
        console.log(botao,container);

    });
});

function desselecionarpersonagem() {
    const personagemSelecionado = document.querySelector(".container.selecionado");
    personagemSelecionado.classList.remove("selecionado");
}

function desselecionarbotao() {
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    botaoSelecionado.classList.remove("selecionado");
}







