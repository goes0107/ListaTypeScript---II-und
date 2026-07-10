// 12. Uma locadora quer controlar os carros disponíveis. O sistema deve solicitar o modelo do carro, o
// valor da diária e a quantidade de dias que o cliente deseja alugar. Crie um método que calcule o valor
// total do aluguel e exiba o resumo da locação. Por fim, o sistema deve perguntar se deseja fazer uma
// nova locação.
export function questao12POO() {
    class Carro {
        constructor(modelo, valorDiaria, quantidadeDias) {
            this.modelo = modelo;
            this.valorDiaria = valorDiaria;
            this.quantidadeDias = quantidadeDias;
        }
        calcularValorTotal() {
            return this.valorDiaria * this.quantidadeDias;
        }
        exibirResumo() {
            let valorTotal = this.calcularValorTotal();
            console.log(`Modelo: ${this.modelo}, Valor da diária: ${this.valorDiaria}, Quantidade de dias: ${this.quantidadeDias}, Valor total do aluguel: ${valorTotal}`);
        }
    }
    let resposta = '';
    while (resposta.toLowerCase() !== 'n') {
        let modelo = String(prompt('Insira o modelo do carro: '));
        let valorDiaria = Number(prompt('Insira o valor da diária: '));
        let quantidadeDias = Number(prompt('Insira a quantidade de dias que deseja alugar: '));
        let newCarro = new Carro(modelo, valorDiaria, quantidadeDias);
        newCarro.exibirResumo();
        resposta = String(prompt('Deseja fazer uma nova locação? (s/n): ')).toLowerCase();
    }
}
