import { Animal } from "./animais"

export class Cachorro extends Animal{

    constructor(
        nome: string,
        idade: number,


    ){
        super(nome, idade,)

    }
    VerCachorro(){
        console.log (`O nome do cachorro é ${this.nome}, \nA idade do cachorro é ${this.idade}`)
    }

    Som(){
        console.log("AuAu")
    }
    Correr(){
        console.log("esse cachorro corre muito")
    }
}