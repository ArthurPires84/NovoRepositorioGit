/* Arthur Pires
* versão 01
*data 06/11/2026
* Projeto batalha naval 2026 em Node.js/JavaScript
* ******************************************/

const teclado = require("prompt-sync")();

//variaveis de ambiente
let Tamanho_mapa = 5;
let Tabuleiro = [];
let Quant_Barcos = 5;
let Quant_Tiros = 5;
let pontos = 0;

// preenche o mapa com agua
for(let linha = 0; linha <= Tamanho_mapa; linha++) {
     Tabuleiro[linha] = [];
    for (let coluna = 0; coluna <= Tamanho_mapa; coluna++) {
        Tabuleiro[linha][coluna] = false;
    }
}

/**************
 * false - agua 
 * true - navio
 */

console.log(Tabuleiro);

for(let i = 0; i <= Quant_Barcos; i++) {
    let posicaoX = parseInt(Math.floor(Math.random() * 5));
    let posicaoY = parseInt(Math.floor(Math.random() * 5));
    Tabuleiro[posicaoX][posicaoY] = true;
}
console.log(Tabuleiro);

/******************
 * jogada  do player
 */

for(let i = 1; i <= Quant_Tiros; i++) {
    let TiroposicaoX = teclado("Digite a coordenada em X:");
    let TiroposicaoY = teclado("Digite a coordenada em Y:");




//verifica se nao é numero
    if(isNaN(TiroposicaoX) || isNaN(TiroposicaoY)) {
      console.log("Digite uma coordenada válida") 
     let TiroposicaoX = teclado("Digite a coordenada em X:");
     let TiroposicaoY = teclado("Digite a coordenada em Y:");
    }
    

// verifica se um tiro acertou um barco
    if(Tabuleiro[TiroposicaoX][TiroposicaoY] === true) {
        // acerto um barco 
        console.log("****************************************");
    console.log("******** BARCO NAUFRAGADO ********");
        console.log("****************************************");
        pontos += 10;
        Pontos = Pontos + 10;
    }

    if(Tabuleiro[TiroposicaoX][TiroposicaoY] === false) {
        // erro, agua
        console.log("****************************************");
        console.log("******** TIRO NA AGUA ********");
        console.log("****************************************");
    }
}

// reduz a quantidade de tiros
console.log("****************************************");
console.log("******** TIROS RESTANTES: " + Quant_Tiros + " ********");
console.log("****************************************");

// Quantidade de Pontos
console.log("******************")
console.log("******** PONTUAÇÃO:")


