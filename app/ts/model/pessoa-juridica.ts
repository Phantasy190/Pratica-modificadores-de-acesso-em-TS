class PessoaJuridica extends Pessoa {
    private _cnpj: number;

    constructor(nome: string, idade: number, dataNascimento: Date, cnpj: number ) {
        super(`${nome} - Jurídica`, idade, dataNascimento);
        this._cnpj = cnpj;
    }

    get cnpj() {
        return this._cnpj;
    }

    toString(): string {
        return super.toString() + `\n - CNPJ: ${this._cnpj}`;
    }

}