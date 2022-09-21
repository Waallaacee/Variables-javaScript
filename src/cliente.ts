export class CLiente{
    nome: string;
    sexo: string;
    cidade: string;
    idade : Number;
    ultimacompra : string;

    constructor(
        nome: string,
        sexo: string,
        cidade: string,
        idade : Number,
        ultimacompra : string
    ){
        this.nome = nome
        this.sexo = sexo
        this.cidade = cidade 
        this.idade = idade
        this.ultimacompra = ultimacompra

    }

    verDados(){
        console.log(`O nome do cliente é: ${this.nome}, \nO genero do cliente é: ${this.sexo}, \n A cidade do Cliente é: ${this.cidade}, \n A idade do cliente é ${this.idade}, \n a última compra do cliente foi em ${this.ultimacompra}`)
    }}