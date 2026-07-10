// 22. Oficina Mecânica e Revisão de Frotas
// O setor de transportes públicos precisa mapear a manutenção de seus veículos. Crie uma classe base
// para Veículo com placa e quilometragem atual. Os Ônibus precisam fazer revisão a cada 10.000 km,
// enquanto as Ambulâncias precisam de revisão preventiva a cada 5.000 km. O sistema interativo deve
// perguntar as informações da frota atual e guardar os objetos em um array. Depois, o programa solicita
// que o mecânico informe a quilometragem atual de um determinado veículo e, varrendo o array de
// objetos, o sistema responde textualmente se aquele veículo específico precisa ou não ser retido para
// manutenção imediata.
export function questao22POO() {
    class Veiculo {
        constructor(placa, quilometragemAtual) {
            this.placa = placa;
            this.quilometragemAtual = quilometragemAtual;
        }
        getPlaca() {
            return this.placa;
        }
        getQuilometragemAtual() {
            return this.quilometragemAtual;
        }
        precisaRevisao() {
            return false;
        }
    }
    class Onibus extends Veiculo {
        constructor(placa, quilometragemAtual) {
            super(placa, quilometragemAtual);
        }
        precisaRevisao() {
            return this.getQuilometragemAtual() >= 10000;
        }
    }
    class Ambulancia extends Veiculo {
        constructor(placa, quilometragemAtual) {
            super(placa, quilometragemAtual);
        }
        precisaRevisao() {
            return this.getQuilometragemAtual() >= 5000;
        }
    }
    let frota = [];
    let resposta = '';
    while (resposta.toLowerCase() !== 'n') {
        let tipoVeiculo = Number(prompt('Digite o tipo de veículo (1-ônibus/2-ambulância): '));
        let placa = String(prompt('Insira a placa do veículo: '));
        let quilometragemAtual = Number(prompt('Insira a quilometragem atual do veículo: '));
        if (tipoVeiculo === 1) {
            let newOnibus = new Onibus(placa, quilometragemAtual);
            frota.push(newOnibus);
        }
        else if (tipoVeiculo === 2) {
            let newAmbulancia = new Ambulancia(placa, quilometragemAtual);
            frota.push(newAmbulancia);
        }
        resposta = String(prompt('Deseja cadastrar outro veículo? (s/n): ')).toLowerCase();
    }
    let placaConsulta = String(prompt('Insira a placa do veículo para consulta de revisão: '));
    let veiculoEncontrado = frota.find(veiculo => veiculo.getPlaca() === placaConsulta);
    if (veiculoEncontrado) {
        if (veiculoEncontrado.precisaRevisao()) {
            console.log(`O veículo com placa ${placaConsulta} precisa de revisão.`);
        }
        else {
            console.log(`O veículo com placa ${placaConsulta} não precisa de revisão.`);
        }
    }
    else {
        console.log(`Veículo com placa ${placaConsulta} não encontrado na frota.`);
    }
    console.log('Resumo da frota cadastrada:');
    for (let veiculo of frota) {
        if (veiculo instanceof Onibus) {
            console.log(`Ônibus - Placa: ${veiculo.getPlaca()}, Quilometragem: ${veiculo.getQuilometragemAtual()}, Precisa de revisão: ${veiculo.precisaRevisao() ? 'Sim' : 'Não'}`);
        }
        else if (veiculo instanceof Ambulancia) {
            console.log(`Ambulância - Placa: ${veiculo.getPlaca()}, Quilometragem: ${veiculo.getQuilometragemAtual()}, Precisa de revisão: ${veiculo.precisaRevisao() ? 'Sim' : 'Não'}`);
        }
    }
}
