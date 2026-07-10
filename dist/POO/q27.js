// 27. Inventário Automatizado de Equipamentos de TI
// Para organizar os laboratórios, crie um sistema de inventário. Todo equipamento possui número de
// tombamento e descrição. Equipamentos do tipo Computador registram a quantidade de memória
// RAM, enquanto equipamentos do tipo Roteador registram a quantidade de portas disponíveis. O
// usuário deve alimentar um array inserindo os equipamentos que estão sendo catalogados no
// laboratório atual. O sistema deve validar as entradas para não aceitar valores nulos ou inválidos. Ao
// término do cadastro, o programa varre a lista inteira, disparando o método de auto-inspeção de cada
// objeto para imprimir uma ficha técnica detalhada de cada item do almoxarifado.
export function questao27POO() {
    class Equipamento {
        constructor(tombamento, descricao) {
            this.tombamento = tombamento;
            this.descricao = descricao;
        }
        exibir() {
            return `Tombamento: ${this.tombamento}\nDescrição: ${this.descricao}`;
        }
    }
    class Computador extends Equipamento {
        constructor(tombamento, descricao, memoriaRAM) {
            super(tombamento, descricao);
            this.memoriaRAM = memoriaRAM;
        }
        exibir() {
            return `${super.exibir()}\nMemória RAM: ${this.memoriaRAM} GB`;
        }
    }
    class Roteador extends Equipamento {
        constructor(tombamento, descricao, portas) {
            super(tombamento, descricao);
            this.portas = portas;
        }
        exibir() {
            return `${super.exibir()}\nPortas: ${this.portas}`;
        }
    }
    let equipamentos = [];
    let resposta = "s";
    while (resposta != "n") {
        let tipo = Number(prompt("Tipo (1-Computador / 2-Roteador): "));
        let tombamento = Number(prompt("Número do tombamento: "));
        let descricao = String(prompt("Descrição: "));
        if (tombamento <= 0 || descricao == "") {
            console.log("Dados inválidos!");
            continue;
        }
        if (tipo == 1) {
            let memoria = Number(prompt("Memória RAM (GB): "));
            if (memoria <= 0) {
                console.log("Valor inválido!");
                continue;
            }
            equipamentos.push(new Computador(tombamento, descricao, memoria));
        }
        if (tipo == 2) {
            let portas = Number(prompt("Quantidade de portas: "));
            if (portas <= 0) {
                console.log("Valor inválido!");
                continue;
            }
            equipamentos.push(new Roteador(tombamento, descricao, portas));
        }
        resposta = String(prompt("Deseja cadastrar outro equipamento? (s/n): ")).toLowerCase();
    }
    console.log("INVENTÁRIO");
    for (let equipamento of equipamentos) {
        console.log(equipamento.exibir());
    }
}
