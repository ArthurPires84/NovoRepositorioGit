 let alunos = ["João", "Maria", "Carlos", "Ana", "Pedro"];
 console.log(alunos);

/*
let frutas = ["Maçã", "Banana", "Laranja", "Uva", "Abacaxi"];

console.log(frutas.length);
frutas.push("Manga");
console.log(frutas);

frutas.pop();
console.log(frutas);

frutas.unshift("Morango");
console.log(frutas);

frutas.shift();
console.log(frutas);

console.log(frutas.includes("açai")); */

/*****************************************
 * Arrays - Estruturas de dados
 * quando a gente precisa armazenar mais de um dado
 * em uma única variável


let alunos = ["João", "Maria", "Pedro", "Ana", "Carlos"];
// mostra todos os alunos
console.log(alunos);
// mostra um aluno em especifico
console.log(alunos[0]);

for(let i=0;i<alunos.length;i++){
    console.log(alunos[i]);
}
 */
let frutas = ["Maça","Banana","Uva"];

console.log(frutas.length); // retorna o tamanho do array
frutas.push("Laranja");     // acrescenta um novo item
console.log(frutas);

// remove um elemento na ultima posição
frutas.pop();
console.log(frutas);

// adicionar ao inicio do array
frutas.unshift("Morango");
console.log(frutas);

// remove o primeiro elemento
frutas.shift();
console.log(frutas);

// verifica se um elemento existe
console.log(frutas.includes("Maça"));

/*********************************
 * Array - matrizes
 * no javascript é um array dentro de uma array
 */

const matriz = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

console.log(matriz[0][0]);
console.log(matriz[1][1]);
console.log(matriz[2][2]);

for(let i=0;i<matriz.length;i++){
    for(let j=0;j<matriz.length;j++){
        console.log(matriz[i][j]);
    }
}
/**
 * Crie um programa que:
    1. Crie um Array com cinco nomes de cidades.
    2. Mostre todos os nomes no console.
    3. Adicione mais uma cidade.
    4. Remova a primeira cidade.
    5. Mostre a quantidade de cidades cadastradas.
 */