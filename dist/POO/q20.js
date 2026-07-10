// 20. Gestão de Pedidos de uma Pizzaria Local
// Para modernizar o atendimento de uma pizzaria, crie um sistema de pedidos. Um pedido base tem o
// número da mesa e o valor dos ingredientes. O Pedido de Entrega (Delivery) herda as propriedades do
// pedido base, mas precisa incluir uma taxa de entrega protegida e o endereço de destino. O software
// deve interagir com o atendente perguntando os detalhes de cada pedido feito na noite. Conforme os
// pedidos são criados, eles entram em um array de controle. Ao fechar o caixa, o sistema percorre a lista
// de pedidos, calcula os valores finais de cada um (aplicando as taxas quando necessário) e exibe o
// // faturamento total do estabelecimento.
export function questao20POO() {
    class Pedido {
        constructor(numeroMesa, valorIngredientes) {
            this.numeroMesa = numeroMesa;
            this.valorIngredientes = valorIngredientes;
        }
        calcularValorFinal() {
            return this.valorIngredientes;
        }
    }
    class PedidoDelivery extends Pedido {
        constructor(numeroMesa, valorIngredientes, taxaEntrega, enderecoDestino) {
            super(numeroMesa, valorIngredientes);
            this.taxaEntrega = taxaEntrega;
            this.enderecoDestino = enderecoDestino;
        }
        calcularValorFinal() {
            return super.calcularValorFinal() + this.taxaEntrega;
        }
    }
    let pedidos = [];
    let resposta = '';
    while (resposta.toLowerCase() !== 'n') {
        let tipoPedido = Number(prompt('Digite 1 para pedido na mesa ou 2 para pedido de entrega: '));
        let numeroMesa = Number(prompt('Insira o número da mesa: '));
        let valorIngredientes = Number(prompt('Insira o valor dos ingredientes: '));
        if (tipoPedido === 2) {
            let taxaEntrega = Number(prompt('Insira a taxa de entrega: '));
            let enderecoDestino = String(prompt('Insira o endereço de destino: '));
            let newPedidoDelivery = new PedidoDelivery(numeroMesa, valorIngredientes, taxaEntrega, enderecoDestino);
            pedidos.push(newPedidoDelivery);
        }
        else {
            let newPedido = new Pedido(numeroMesa, valorIngredientes);
            pedidos.push(newPedido);
        }
        resposta = String(prompt('Deseja cadastrar outro pedido? (s/n): ')).toLowerCase();
    }
    console.log('Resumo dos pedidos:');
    let faturamentoTotal = 0;
    for (let pedido of pedidos) {
        let valorFinal = pedido.calcularValorFinal();
        faturamentoTotal += valorFinal;
        console.log(`Valor final do pedido: ${valorFinal}`);
    }
    console.log(`Faturamento total do estabelecimento: ${faturamentoTotal}`);
}
