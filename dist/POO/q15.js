// 15. Herança Encapsulamento
// Uma empresa possui dois tipos de funcionários: horistas (pagos por hora trabalhada) e assalariados
// (salário fixo mensal). Crie uma hierarquia de classes com Funcionário como superclasse e
// FuncionarioHorista e FuncionarioAssalariado como subclasses. O programa deve solicitar os dados via
// teclado e calcular o salário de cada um.
export function questao15POO() {
    class Funcionario {
        constructor(nome) {
            this.nome = nome;
        }
        getNome() {
            return this.nome;
        }
        calcularSalario() {
            return 0;
        }
    }
    class FuncionarioHorista extends Funcionario {
        constructor(nome, horasTrabalhadas, valorHora) {
            super(nome);
            this.horasTrabalhadas = horasTrabalhadas;
            this.valorHora = valorHora;
        }
        calcularSalario() {
            return this.horasTrabalhadas * this.valorHora;
        }
    }
    class FuncionarioAssalariado extends Funcionario {
        constructor(nome, salarioMensal) {
            super(nome);
            this.salarioMensal = salarioMensal;
        }
        calcularSalario() {
            return this.salarioMensal;
        }
    }
    let funcionarios = [];
    let resposta = '';
    while (resposta.toLowerCase() !== 'n') {
        let tipoFuncionario = Number(prompt('Digite o tipo de funcionário (1-horista/2-assalariado): '));
        let nome = String(prompt('Insira o nome do funcionário: '));
        if (tipoFuncionario === 1) {
            let horasTrabalhadas = Number(prompt('Insira o número de horas trabalhadas: '));
            let valorHora = Number(prompt('Insira o valor da hora: '));
            let newFuncionario = new FuncionarioHorista(nome, horasTrabalhadas, valorHora);
            funcionarios.push(newFuncionario);
        }
        else if (tipoFuncionario === 2) {
            let salarioMensal = Number(prompt('Insira o salário mensal: '));
            let newFuncionario = new FuncionarioAssalariado(nome, salarioMensal);
            funcionarios.push(newFuncionario);
        }
        resposta = String(prompt('Deseja cadastrar outro funcionário? (s/n): ')).toLowerCase();
    }
    console.log('Resumo dos funcionários cadastrados:');
    for (let funcionario of funcionarios) {
        console.log(`Nome: ${funcionario.getNome()}, Salário: ${funcionario.calcularSalario()}`);
    }
}
