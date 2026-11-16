

const prompt = require({sigint: true})("prompt-sync");

let nome1 = prompt("Digite um nome:");
let nome2 = prompt("Digite outro nome:");

nome1 = String(nome1); // cast pra string
nome2 = String(nome2);

console.log("Nome digitado foi:", nome1);
console.log("Nome digitado foi:", nome2);

let resultado = nome1 + nome2;
console.log(resultado);