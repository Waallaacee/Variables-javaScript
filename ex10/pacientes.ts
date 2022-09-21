import { Pessoadois } from "./Pessoadois";

export class Funcionario extends Pessoadois {
    cod: string;
    cargo: string;
    ct: string;
    salario: number

    constructor(
        nome: string,
        cpf: string,
        rg: string,
        cidade: string,
        idade: number,
        cod: string,
        cargo: string,
        ct: string,
        salario: number
    ){
        super(nome, cpf, rg, cidade, idade)
        this.cod = cod
        this.cargo = cargo
        this.ct = ct
        this.salario = salario
    }
}