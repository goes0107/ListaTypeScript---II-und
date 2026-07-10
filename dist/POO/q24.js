// 24. Gerenciador de Tarefas e Produtividade Acadêmica
// Para ajudar os alunos a não perderem prazos, monte um gerenciador de tarefas. Uma tarefa genérica
// possui uma descrição e o status de concluída (booleano). Uma Tarefa Acadêmica inclui o nome da
// disciplina associada, enquanto uma Tarefa Pessoal inclui o nível de prioridade. O programa deve abrir
// um menu para o estudante inserir suas tarefas diárias. O sistema armazena tudo em um array
// unificado. Através da interação, o usuário pode escolher marcar uma tarefa como concluída ou listar
// apenas as tarefas acadêmicas pendentes, utilizando a lógica de filtragem de propriedades dos objetos
// contidos na lista.
export function questao24POO() {
    class Tarefa {
        constructor(descricao) {
            this.descricao = descricao;
            this.concluida = false;
        }
        getDescricao() {
            return this.descricao;
        }
        isConcluida() {
            return this.concluida;
        }
        marcarConcluida() {
            this.concluida = true;
        }
    }
    class TarefaAcademica extends Tarefa {
        constructor(descricao, disciplina) {
            super(descricao);
            this.disciplina = disciplina;
        }
        getDisciplina() {
            return this.disciplina;
        }
    }
    class TarefaPessoal extends Tarefa {
        constructor(descricao, prioridade) {
            super(descricao);
            this.prioridade = prioridade;
        }
        getPrioridade() {
            return this.prioridade;
        }
    }
    let tarefas = [];
    let resposta = '';
    while (resposta.toLowerCase() !== 'n') {
        let tipoTarefa = Number(prompt('Digite o tipo de tarefa (1-acadêmica/2-pessoal): '));
        let descricao = String(prompt('Insira a descrição da tarefa: '));
        if (tipoTarefa === 1) {
            let disciplina = String(prompt('Insira o nome da disciplina: '));
            let newTarefaAcademica = new TarefaAcademica(descricao, disciplina);
            tarefas.push(newTarefaAcademica);
        }
        else if (tipoTarefa === 2) {
            let prioridade = Number(prompt('Insira o nível de prioridade (1-baixa/2-média/3-alta): '));
            let newTarefaPessoal = new TarefaPessoal(descricao, prioridade);
            tarefas.push(newTarefaPessoal);
        }
        resposta = String(prompt('Deseja adicionar outra tarefa? (s/n): ')).toLowerCase();
    }
    console.log('Tarefas Acadêmicas Pendentes:');
    for (let tarefa of tarefas) {
        if (tarefa instanceof TarefaAcademica && !tarefa.isConcluida()) {
            console.log(`Descrição: ${tarefa.getDescricao()}, Disciplina: ${tarefa.getDisciplina()}`);
        }
    }
}
