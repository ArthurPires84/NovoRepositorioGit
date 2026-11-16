let opcao = prompt(
    "Escolha uma figura geométrica:\n" +
    "1 - Retângulo\n" +
    "2 - Quadrado\n" +
    "3 - Circunferência\n" +
    "4 - Triângulo"
);

switch (opcao) {
    case "1":
        let base = Number(prompt("Digite a base do retângulo:"));
        let altura = Number(prompt("Digite a altura do retângulo:"));
        console.log("Área: " + (base * altura));
        console.log("Perímetro: " + (2 * (base + altura)));
        break;

    case "2":
        let lado = Number(prompt("Digite o lado do quadrado:"));
        console.log("Área: " + (lado * lado));
        console.log("Perímetro: " + (4 * lado));
        break;

    case "3":
        let raio = Number(prompt("Digite o raio da circunferência:"));
        let areaCirc = Math.PI * Math.pow(raio, 2);
        let perimetroCirc = 2 * Math.PI * raio;
        console.log("Área: " + areaCirc.toFixed(2));
        console.log("Perímetro: " + perimetroCirc.toFixed(2));
        break;

    case "4":
        let l1 = Number(prompt("Digite o lado 1 do triângulo:"));
        let l2 = Number(prompt("Digite o lado 2 do triângulo:"));
        let l3 = Number(prompt("Digite o lado 3 do triângulo:"));
        console.log("Perímetro do triângulo: " + (l1 + l2 + l3));
        break;

    default:
        console.log("Opção inválida.");
}
