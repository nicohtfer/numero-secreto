let listaNumerosSorteados = [];
let numeroLimite = 100;
let numeroSecreto = verificarNumeroAleatorio();
let tentativas = 1;

function verificarChute() {
    let chute = document.querySelector("input").value;
    if (chute == numeroSecreto) {
        let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa"
        let fraseTentativa = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
        alterarTexto("h1", "Parabéns!!");
        alterarTexto("p", fraseTentativa);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        if (chute > numeroSecreto) {
            alterarTexto("h1", "Você errou!");
            alterarTexto("p", `O número secreto é menor que ${chute}`);
        } else {
            alterarTexto("h1", "Você errou!");
            alterarTexto("p", `O número secreto é maior que ${chute}`);
        } tentativas++
        limparCampo();
    }
}

function alterarTexto(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, "Brazilian Portuguese Female", {rate:1.2});
}
function textoInicical() {
    alterarTexto("h1", "Jogo do número secreto");
    alterarTexto("p", `Escolha um número entre 1 e ${numeroLimite} `);
}
textoInicical();

function verificarNumeroAleatorio() {
   let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
   let quantidadeElementosLista = listaNumerosSorteados.length

if (quantidadeElementosLista == numeroLimite) {
    listaNumerosSorteados = [];
}

   if (listaNumerosSorteados.includes(numeroEscolhido)) {
    return verificarNumeroAleatorio();
   } else {
    listaNumerosSorteados.push(numeroEscolhido);
    return numeroEscolhido;
   }
}

function limparCampo() {
    chute = document.querySelector("input");
    chute.value = "";
}

function reiniciarJogo() {
    numeroSecreto = verificarNumeroAleatorio();
    tentativas = 1;
    textoInicical();
    limparCampo();
    document.getElementById("reiniciar").setAttribute("disabled",true);
}