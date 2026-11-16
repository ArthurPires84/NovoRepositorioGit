// classe - molde para os objetos
// objeto - A apresentação do mundo real dentro do código

class carros {
    // construtor
    constructor(marca, modelo, ano){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
    // metodos de classe carro
    acelerar(){
        console.log("O carro está acelerando..");
    }
    frear(){
        console.log("O carro está freando");
    }
}

// criando os objetos da classe carro
const carro1 = new carros("Toyota", "Corolla", 2024);
const carro2 = new carros("Volkswagen", "Gol", 2020);


// acessando os dados dos objetos
console.log(carro1.marca);
console.log(carro2.modelo);

// executando os métodos
carro1.acelerar();
carro2.frear();

class Cachorro{
    constructor(raca, peso, cor){
        this.raca = raca;
        this.peso = peso;
        this.cor = cor;
    }
    SomAnimal(){
        console.log("AuAuAU");

    }
    Mordida(){
        console.log("RsRsRs");
    }
}

const cachorro1 = new Cachorro("Rotwailer", 54, "Preto");
const cachorro2 = new Cachorro("Pastor Belga", 53, "Caramelo");

console.log(cachorro1.raca);
console.log(cachorro2.cor);

cachorro1.SomAnimal();
cachorro2.Mordida();


//Herança
// quando uma classe herda métodos e atributos de outra

class veiculo{
    constructor(marca, modelo){
        this.marca = marca;
        this.modelo = modelo
    }
    ligar(){
        console.log("Veiculo ligado");
    }

}

class moto extends veiculo{
    PegaVento(){
        console.log("Ventando");
    }
}

class caminhao extends veiculo{
    FreioAr(){
        console.log("Faz barulho de ar");
    }
}

class carro extends veiculo{
    AbrePorta(){
        console.log("Porta do carro");
    }
}
const meuCarro = new carro("Toyota", "Corolla");

console.log(meuCarro.marca);

meuCarro.ligar();
meuCarro.AbrePorta();


/*Polimorfismo
//mesmo método diferentes resultados

class animal{
    emitirSom(){
        console.log("Todo animal faz um som");
    }
}

class Cachorros extends animal{
    emitirSom(){
    console.log("AUAUAU")
    }
}

class gatos{
    emitirSom(){
        console.log("MIAU");
    }
}

const cachorro = new Cachorros();
const gato = new gatos();

Cachorros.emitirSom();
gatos.emitirSom();


*/

//Encapsulamento

class ContaBancaria{
    saldo = 0;

    deposita(valor){
        if(valor > 0){
            this.saldo += valor;
        }
    }
    cosultaSaldo(){
        return this.saldo;
    }
}

const conta = new ContaBancaria();

console.log