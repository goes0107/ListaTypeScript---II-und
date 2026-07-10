// 8. Uma empresa precisa de um sistema simples para cadastrar seus funcionários. O sistema deve solicitar
// ao usuário o nome, o cargo e o salário de vários funcionários. Para cada funcionário cadastrado, deve
// ser criado um objeto que armazene essas informações. Ao final, o sistema deve exibir um resumo de
// todos os funcionários cadastrados, utilizando um método da classe.
export function questao8POO() {
    class Funcionario {
        constructor(nome, cargo, salario) {
            this.nome = nome;
            this.cargo = cargo;
            this.salario = salario;
        }
        exibirResumo() {
            console.log(`Nome: ${this.nome}, Cargo: ${this.cargo}, Salário: ${this.salario}`);
        }
    }
    let funcionarios = [];
    let resposta = '';
    while (resposta.toLowerCase() !== 'n') {
        let nome = String(prompt('Insira o nome do funcionário: '));
        let cargo = String(prompt('Insira seu cargo: '));
        let salario = Number(prompt('Insira seu salário: '));
        let newFuncionario = new Funcionario(nome, cargo, salario);
        funcionarios.push(newFuncionario);
        resposta = String(prompt('Deseja cadastrar outro funcionário? (s/n): ')).toLowerCase();
    }
    console.log('Resumo dos funcionários cadastrados:');
    for (let funcionario of funcionarios) {
        funcionario.exibirResumo();
    }
}
