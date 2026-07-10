// 11. Uma lanchonete quer registrar pedidos dos clientes. O sistema deve solicitar o nome do cliente, o
// nome do pedido e o valor. Crie um método que exiba o resumo do pedido e o valor total.
export function questao11POO() {
    class Pedido {
        constructor(nomeCliente, nomePedido, valor) {
            this.nomeCliente = nomeCliente;
            this.nomePedido = nomePedido;
            this.valor = valor;
        }
        exibirResumo() {
            console.log(`Cliente: ${this.nomeCliente}, Pedido: ${this.nomePedido}, Valor: ${this.valor}`);
        }
    }
    let pedidos = [];
    let resposta = '';
    while (resposta.toLowerCase() !== 'n') {
        let nomeCliente = String(prompt('Insira o nome do cliente: '));
        let nomePedido = String(prompt('Insira o nome do pedido: '));
        let valor = Number(prompt('Insira o valor do pedido: '));
        let newPedido = new Pedido(nomeCliente, nomePedido, valor);
        pedidos.push(newPedido);
        resposta = String(prompt('Deseja cadastrar outro pedido? (s/n): ')).toLowerCase();
    }
    console.log('Resumo dos pedidos cadastrados:');
    for (let pedido of pedidos) {
        pedido.exibirResumo();
    }
}
