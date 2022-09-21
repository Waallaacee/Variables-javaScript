export class Avião{
    nome: string;
    modelo: string;
    país: string;
    ano : Number;

    constructor(
        nome: string,
        modelo: string,
        país: string,
        ano: Number,
    ){
        this.nome = nome
        this.modelo = modelo
        this.país = país 
        this.ano = ano
    }

    verDados(){
        console.log(`O nome do avião é ${this.nome}, \nO Modelo é: ${this.modelo}, \n O país de Fabricação é: ${this.país}, \n Seu ano de Produção é ${this.ano}`)
    }}
