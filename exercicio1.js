
const prompt = require("prompt-sync")();

let nome_aluno = prompt("Digite o nome do aluno: ");

let nota1 = prompt("Digite a primeira nota: ");
let nota2 = prompt("Digite a segunda nota: ");
let nota3 = prompt("Digite a terceira nota: ");

Nota1 = Number(nota1);
Nota2 = Number(nota2);
Nota3 = Number(nota3); 

let media = (Nota1 + Nota2 + Nota3) / 3;
console.log("O aluno", nome_aluno, "tem média", media); 
