var _a;
class Funcionario {
    constructor(nome, cargo, salario) {
        this._nome = nome;
        this._cargo = cargo;
        this._salario = salario;
    }
    exibirResumo() {
        console.log(`Funcionário: ${this._nome} | Cargo: ${this._cargo} | Salário: ${this._salario}`);
    }
}
let listaFuncionarios = [];
let continuar = ``;
let novoFuncionario;
while (continuar != `N`) {
    let n = ``, c = ``, s = 0;
    n = String(prompt(`Insira o nome do funcionario: `));
    c = String(prompt(`Insira o cargo do funcionario: `));
    s = Number(prompt(`Informe o salário do funcionario: `));
    novoFuncionario = new Funcionario(n, c, s);
    listaFuncionarios.push(novoFuncionario);
    continuar = (_a = String(prompt(`Deseja adicionar outro funcionário? S-Sim N-Não`))) === null || _a === void 0 ? void 0 : _a.toUpperCase();
}
for (let func of listaFuncionarios) {
    func.exibirResumo();
}
export {};
//ou
// for (let i = 0; i<listaFuncionarios.length; i++){
//     listaFuncionarios[i].exibirResumo()
// }
