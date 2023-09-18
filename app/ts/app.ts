let contaController = new ContaController();

contaController.listar();

const c1 = new Conta('1', 100);
const p1 = new Poupanca('2', 100);
const cb1 = new ContaBonificada('3', 0);

console.log('Conta: ' + c1.saldo);

p1.atualizarSaldoAniversario();
console.log('Poupanca: ' + p1.saldo);

cb1.creditar(100);
console.log('Conta Bonificada: ' + cb1.saldo);

const pessoa1 = new Pessoa('Roberto', 32, new Date('1997-09-04'));
console.log('pessoa1 = ' + pessoa1);

const pessoaf1 = new PessoaFisica('Lucas', 32, new Date('1997-09-04'), 1234);
console.log('pessoa fisica 1 = ' + pessoaf1);
const pessoaj1 = new PessoaJuridica('Embraer', 32, new Date('1997-09-04'), 11111);
console.log('pessoa juridica 1 = ' + pessoaj1);

