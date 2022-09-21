export class Funcionario {
    nome: string;
    cpf: string;
    rg: string;
    cargo: string;
    idade : Number;

    constructor(
        nome: string,
        cpf: string,
        rg: string,
        cidade: string,
        idade: Number,
        cargo: string
    ){
        this.nome = nome
        this.cpf = cpf 
        this.rg = rg
        this.idade = idade
        this.cargo = cargo
    }

    verDados(){
          console.log(`O nome da pessoa é: ${this.nome}, \nO CPF é: ${this.cpf}, \n O RG é: ${this.rg}, \n a idade do funcionário é ${this.idade}, "\n O cargo do funcionário é ${this.cargo}"} `)
    }
}