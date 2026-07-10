// 1. Classe Bola: Crie uma classe que modele uma bola:
//  Atributos: Cor, circunferência, material
//  Métodos: trocaCor e mostraCor
export function questao1POO() {
    class Bola {
        constructor(cor, circunferencia, material) {
            this.cor = cor;
            this.circunferencia = circunferencia;
            this.material = material;
        }
        trocaCor(novaCor) {
            this.cor = novaCor;
        }
        mostraCor() {
            return this.cor;
        }
    }
    const minhaBola = new Bola("vermelha", 30, "borracha");
    console.log(minhaBola.mostraCor());
    minhaBola.trocaCor("azul");
    console.log(minhaBola.mostraCor());
}
