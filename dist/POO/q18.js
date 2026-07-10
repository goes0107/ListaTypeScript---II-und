// 18. Folha de Pagamento Unificada do IFS
// O setor de Recursos Humanos necessita de uma ferramenta para calcular a folha salarial dos
// colaboradores. Todo colaborador possui nome, idade e um salário base privado. Um Professor recebe
// um acréscimo de 20% sobre o salário base por dedicação exclusiva. Um Técnico Administrativo
// recebe um valor fixo extra de auxílio-alimentação. O programa deve perguntar qual funcionário
// deseja cadastrar e rodar em um laço solicitando o cadastro dos funcionários do mês. Após coletar
// todos os dados, o software deve apresentar o resumo dos salários, acionar o método de cálculo salarial
// específico de cada um e exibir o custo que a instituição tem com professor, técnico Administrativo e o
// custo total que a instituição terá naquele mês.
export function questao18POO() {
    class Colaborador {
        constructor(nome, idade, salarioBase) {
            this.nome = nome;
            this.idade = idade;
            this.salarioBase = salarioBase;
        }
        getSalarioBase() {
            return this.salarioBase;
        }
        calcularSalario() {
            return this.salarioBase;
        }
    }
    class Professor extends Colaborador {
        calcularSalario() {
            return this.getSalarioBase() * 1.2;
        }
    }
    class TecnicoAdministrativo extends Colaborador {
        calcularSalario() {
            return this.getSalarioBase() + 500;
        }
    }
    let colaboradores = [];
    let resposta = '';
    while (resposta.toLowerCase() !== 'n') {
        let tipo = Number(prompt('Digite o tipo de colaborador (1-professor/2-técnico): '));
        let nome = String(prompt('Insira o nome do colaborador: '));
        let idade = Number(prompt('Insira a idade do colaborador: '));
        let salarioBase = Number(prompt('Insira o salário base do colaborador: '));
        let newColaborador;
        if (tipo === 1) {
            newColaborador = new Professor(nome, idade, salarioBase);
            colaboradores.push(newColaborador);
        }
        else if (tipo === 2) {
            newColaborador = new TecnicoAdministrativo(nome, idade, salarioBase);
            colaboradores.push(newColaborador);
        }
        resposta = String(prompt('Deseja cadastrar outro colaborador? (s/n): ')).toLowerCase();
    }
    console.log('Resumo dos salários:');
    let custoTotal = 0;
    let custoProfessores = 0;
    let custoTecnicos = 0;
    for (let colaborador of colaboradores) {
        let salarioCalculado = colaborador.calcularSalario();
        console.log(`Colaborador: ${colaborador.nome}, Idade: ${colaborador.idade}, Salário Calculado: ${salarioCalculado}`);
        custoTotal += salarioCalculado;
        if (colaborador instanceof Professor) {
            custoProfessores += salarioCalculado;
        }
        else if (colaborador instanceof TecnicoAdministrativo) {
            custoTecnicos += salarioCalculado;
        }
    }
    console.log(`Custo Total: ${custoTotal}`);
    console.log(`Custo Professores: ${custoProfessores}`);
    console.log(`Custo Técnicos Administrativos: ${custoTecnicos}`);
}
