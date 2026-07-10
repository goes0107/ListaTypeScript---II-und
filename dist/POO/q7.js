// 7. Uma empresa quer cadastrar funcionários e aplicar aumento salarial. O sistema deve pedir nome,
// cargo e salário. Crie um método que receba um percentual de aumento e atualize o salário do
// funcionário, exibindo o seu nome e novo valor.
export function questao7POO() {
    class Funcionario {
        constructor(nome, cargo, salario) {
            this.nome = nome;
            this.cargo = cargo;
            this.salario = salario;
        }
        atualizarSalario(percentualAumento) {
            let novoSalario = this.salario + (this.salario * (percentualAumento / 100));
            return novoSalario;
        }
    }
    let nome = String(prompt('Insira o nome do funcionário: '));
    let cargo = String(prompt('Insira seu cargo: '));
    let salario = Number(prompt('Insira seu salário: '));
    let percentualAumento = Number(prompt('Insira seu percentual de aumento em porcentagem (Ex: 25%): '));
    let newFuncionario = new Funcionario(nome, cargo, salario);
    let novoSalario = newFuncionario.atualizarSalario(percentualAumento);
    console.log(`Nome: ${nome}`);
    console.log(`Cargo: ${cargo}`);
    console.log(`Salário antes do aumento: ${salario}`);
    console.log(`Novo salário: ${novoSalario}`);
}
