// 30. O Sistema de Bilhetagem de Transporte Intermunicipal
// O sistema de transportes da região precisa de um software para gerenciar a venda de passagens. Crie
// um modelo onde cada passagem possua o nome do passageiro, CPF e o valor base da corrida. Garanta
// que esses dados não sejam alterados diretamente de fora da classe. Existem duas modalidades: a
// Passagem Comum e a Passagem Estudantil (que aplica automaticamente 50% de desconto no valor
// base). O programa deve solicitar ao usuário, em um laço de repetição, os dados de várias passagens e
// o seu tipo. No final, o sistema exibe o relatório de todas as passagens vendidas e calcula o
// faturamento total do dia utilizando uma estrutura de redução ou soma acumulada.
export function questao30POO() {
    class Passagem {
        constructor(nome, cpf, valorBase) {
            this.nome = nome;
            this.cpf = cpf;
            this.valorBase = valorBase;
        }
        getNome() {
            return this.nome;
        }
        getCpf() {
            return this.cpf;
        }
        getValorBase() {
            return this.valorBase;
        }
        calcularValor() {
            return this.valorBase;
        }
        exibir() {
            return `Nome: ${this.nome}
    CPF: ${this.cpf}
    Valor: R$ ${this.calcularValor().toFixed(2)}`;
        }
    }
    class PassagemEstudantil extends Passagem {
        calcularValor() {
            return this.getValorBase() * 0.5;
        }
    }
    let passagens = [];
    let resposta = "s";
    while (resposta != "n") {
        let tipo = Number(prompt("Tipo (1-Comum / 2-Estudantil): "));
        let nome = String(prompt("Nome: "));
        let cpf = String(prompt("CPF: "));
        let valor = Number(prompt("Valor da passagem: "));
        if (tipo == 1) {
            passagens.push(new Passagem(nome, cpf, valor));
        }
        if (tipo == 2) {
            passagens.push(new PassagemEstudantil(nome, cpf, valor));
        }
        resposta = String(prompt("Deseja cadastrar outra passagem? (s/n): ")).toLowerCase();
    }
    let faturamento = 0;
    console.log("RELATÓRIO");
    for (let passagem of passagens) {
        console.log(passagem.exibir());
        faturamento += passagem.calcularValor();
    }
    console.log("Faturamento do dia: R$", faturamento.toFixed(2));
}
