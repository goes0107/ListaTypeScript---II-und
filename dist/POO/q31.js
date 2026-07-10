// 31. O projeto socioambiental &quot;Flor&amp;Ser&quot; abriu inscrições para propostas de reflorestamento no campus do IFS Tobias
// Barreto. Crie a superclasse Projeto com os atributos privados titulo, coordenador e nota. O setter setNota(valor)
// deve validar estritamente o intervalo de 0 a 10, lançando exceção ou mensagem de erro para valores inválidos. As
// subclasses ProjetoVerde (plantio urbano) e ProjetoCultural (conscientização) sobrescrevem o método
// descricaoCategoria() com textos distintos. O usuário preenche os projetos pelo terminal. O programa calcula a
// média das notas e, ao final, exibe os projetos com nota acima da média, mostrando a categoria de cada um via
// polimorfismo.
// Requisitos mínimos:
// • nota privada com validação estrita no setter (0 ≤ nota ≤ 10).
// • descricaoCategoria() abstrato/sobrescrito em ProjetoVerde e ProjetoCultural.
// • Cálculo de média com laço sobre os projetos cadastrados.
// • Filtro e exibição dos projetos acima da média.
// • Chamada polimórfica a descricaoCategoria() na exibição final.
export function questao31POO() {
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
