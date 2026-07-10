// 25. Aplicativo de Streaming e Assinaturas de Vídeo
// Um provedor de internet quer lançar um serviço de streaming de vídeo. Cada assinatura possui o e-
// mail do usuário e o valor do plano mensal. A Assinatura Padrão dá direito a 2 telas simultâneas. A
// Assinatura Premium dá direito a 4 telas e inclui suporte à resolução 4K. O sistema deve pedir para o
// atendente cadastrar novos clientes e selecionar seus planos correspondentes em um loop. Com os
// dados salvos em uma lista de contratos, o programa deve permitir fazer uma busca pelo e-mail do
// usuário e exibir o contrato detalhado formatado dinamicamente, revelando os benefícios e o preço
// correto do plano escolhido por meio de polimorfismo.
export function questao25POO() {
    class Assinatura {
        constructor(email, valorPlano) {
            this.email = email;
            this.valorPlano = valorPlano;
        }
        getEmail() {
            return this.email;
        }
        getValorPlano() {
            return this.valorPlano;
        }
        exibirDetalhes() {
            return `Email: ${this.email}, Valor do Plano: R$ ${this.valorPlano.toFixed(2)}`;
        }
    }
    class AssinaturaPadrao extends Assinatura {
        constructor(email, valorPlano) {
            super(email, valorPlano);
            this.telasSimultaneas = 2;
        }
        getTelasSimultaneas() {
            return this.telasSimultaneas;
        }
        exibirDetalhes() {
            return `${super.exibirDetalhes()}, Telas Simultâneas: ${this.telasSimultaneas}`;
        }
    }
    class AssinaturaPremium extends Assinatura {
        constructor(email, valorPlano) {
            super(email, valorPlano);
            this.telasSimultaneas = 4;
            this.resolucao4K = true;
        }
        getTelasSimultaneas() {
            return this.telasSimultaneas;
        }
        getResolucao4K() {
            return this.resolucao4K;
        }
        exibirDetalhes() {
            return `${super.exibirDetalhes()}, Telas Simultâneas: ${this.telasSimultaneas}, Resolução 4K: ${this.resolucao4K}`;
        }
    }
    let assinaturas = [];
    let resposta = '';
    while (resposta.toLowerCase() !== 'n') {
        let tipoAssinatura = Number(prompt('Digite o tipo de tarefa (1-padrão/2-premium): '));
        if (tipoAssinatura == 1) {
            let email = String(prompt("Email: "));
            let valor = Number(prompt("Valor do plano: "));
            let assinatura = new AssinaturaPadrao(email, valor);
            assinaturas.push(assinatura);
        }
        if (tipoAssinatura == 2) {
            let email = String(prompt("Email: "));
            let valor = Number(prompt("Valor do plano: "));
            let assinatura = new AssinaturaPremium(email, valor);
            assinaturas.push(assinatura);
        }
        resposta = String(prompt('Deseja cadastrar um novo cliente? (s/n): ')).toLowerCase();
    }
    let busca = String(prompt("Digite o e-mail para buscar: "));
    let encontrou = false;
    for (let assinatura of assinaturas) {
        if (assinatura.getEmail() == busca) {
            console.log("Contrato encontrado:");
            console.log(assinatura.exibirDetalhes());
            encontrou = true;
        }
    }
    if (!encontrou) {
        console.log("Assinatura não encontrada.");
    }
}
