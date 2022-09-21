import { Animal } from "./animais"

export class Cavalo extends Animal{

    constructor(
        nome: string,
        idade: number,


    ){
        super(nome, idade)

    }
    VerCavalo(){
        console.log (`O nome do cavalo é ${this.nome}, \nA idade do cavalo é ${this.idade}`)
    }

    Som(){
        console.log("Relincho")
    }
    Correr(){
        console.log("esse cavalo é muito veloz")
    }
}