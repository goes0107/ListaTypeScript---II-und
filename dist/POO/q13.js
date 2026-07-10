// 13. Uma escola quer cadastrar alunos e suas notas. O sistema deve solicitar o nome do aluno e duas notas.
// Cada aluno será um objeto. Crie um método que calcule a média e informe se o aluno foi aprovado ou
// reprovado.
export function questao13POO() {
    class Aluno {
        constructor(nome, nota1, nota2) {
            this.nome = nome;
            this.nota1 = nota1;
            this.nota2 = nota2;
        }
        calcularMedia() {
            return (this.nota1 + this.nota2) / 2;
        }
        verificarAprovacao() {
            let media = this.calcularMedia();
            if (media >= 6) {
                return `Aluno ${this.nome} aprovado com média ${media.toFixed(2)}`;
            }
            else {
                return `Aluno ${this.nome} reprovado com média ${media.toFixed(2)}`;
            }
        }
    }
    let resposta = '';
    while (resposta.toLowerCase() !== 'n') {
        let nome = String(prompt('Insira o nome do aluno: '));
        let nota1 = Number(prompt('Insira a primeira nota: '));
        let nota2 = Number(prompt('Insira a segunda nota: '));
        let newAluno = new Aluno(nome, nota1, nota2);
        console.log(newAluno.verificarAprovacao());
        resposta = String(prompt('Deseja cadastrar outro aluno? (s/n): ')).toLowerCase();
    }
}
