class PessoaFisica extends Pessoa {
    constructor(nome, idade, dataNascimento, cpf) {
        super(`${nome} - Física`, idade, dataNascimento);
        this._cpf = cpf;
    }
    get cpf() {
        return this._cpf;
    }
    toString() {
        return super.toString() + `\n - CPF: ${this._cpf}`;
    }
}
