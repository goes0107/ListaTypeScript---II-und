// 21. Concurso de Projetos de Extensão Reforest
// O projeto socioambiental &quot;Flor&amp;Ser&quot; abriu inscrições para novas propostas de reflorestamento no
// campus. Cada projeto inscrito possui título, coordenador e uma nota de avaliação avaliada de forma
// estrita (protegida por métodos de validação para que não receba valores fora do intervalo de 0 a 10).
// Existem Projetos Verdes (focados em plantio urbano) e Projetos Culturais (focados em
// conscientização). O usuário deve preencher a lista de projetos avaliados através do terminal. O
// programa deve calcular a média aritmética de todas as notas usando estruturas de array e, em seguida,
// listar de forma inversa à inscrição quais projetos ganharam nota acima da média da competição.
export function questao21POO() {
    class Projeto {
        constructor(titulo, coordenador, nota) {
            this.titulo = titulo;
            this.coordenador = coordenador;
            this.nota = nota;
        }
        getTitulo() {
            return this.titulo;
        }
        getCoordenador() {
            return this.coordenador;
        }
        getNota() {
            return this.nota;
        }
        setNota(nota) {
            if (nota >= 0 && nota <= 10) {
                this.nota = nota;
            }
            else {
                console.error("Nota inválida. Deve estar entre 0 e 10.");
            }
        }
    }
    class ProjetoVerde extends Projeto {
        descricaoCategoria() {
            return "Projeto Verde: Focado em plantio urbano.";
        }
    }
    class ProjetoCultural extends Projeto {
        descricaoCategoria() {
            return "Projeto Cultural: Focado em conscientização.";
        }
    }
    let projetos = [];
    let resposta = '';
    while (resposta.toLowerCase() !== 'n') {
        let titulo = String(prompt('Insira o título do projeto: '));
        let coordenador = String(prompt('Insira o nome do coordenador: '));
        let nota = Number(prompt('Insira a nota do projeto (0 a 10): '));
        let tipo = Number(prompt('Insira o tipo de projeto (1-Verde/2-Cultural): '));
        let newProjeto;
        if (tipo === 1) {
            newProjeto = new ProjetoVerde(titulo, coordenador, nota);
            projetos.push(newProjeto);
        }
        else if (tipo === 2) {
            newProjeto = new ProjetoCultural(titulo, coordenador, nota);
            projetos.push(newProjeto);
        }
        resposta = String(prompt('Deseja cadastrar outro projeto? (s/n): ')).toLowerCase();
    }
    let somaNotas = 0;
    for (let projeto of projetos) {
        somaNotas += projeto.getNota();
    }
    let mediaNotas = somaNotas / projetos.length;
    console.log(`Média das notas: ${mediaNotas.toFixed(2)}`);
    console.log('Projetos com nota acima da média (em ordem inversa):');
    for (let i = projetos.length - 1; i >= 0; i--) {
        if (projetos[i].getNota() > mediaNotas) {
            console.log(`Título: ${projetos[i].getTitulo()}, Coordenador: ${projetos[i].getCoordenador()}, Nota: ${projetos[i].getNota()}`);
        }
    }
}
