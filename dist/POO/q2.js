// 2. Classe Quadrado: Crie uma classe que modele um quadrado:
//  Atributos: Tamanho do lado
//  Métodos: Mudar valor do Lado,
//  Retornar valor do Lado e calcular Área;
export function questao2POO() {
    class Quadrado {
        constructor(lado) {
            this.lado = lado;
        }
        mudarLado(novoLado) {
            this.lado = novoLado;
        }
        retornarLado() {
            return this.lado;
        }
        calcularArea() {
            return this.lado * this.lado;
        }
    }
    let meuQuadrado = new Quadrado(5);
    console.log(`Lado do quadrado: ${meuQuadrado.retornarLado()}`);
    console.log(`Área do quadrado: ${meuQuadrado.calcularArea()}`);
}
