class Funcionario{
    _nome: string
    _cargo: string
    _salario: number

    constructor(nome: string, cargo: string, salario: number){
        this._nome = nome
        this._cargo = cargo
        this._salario = salario
    }

    exibirResumo(): void {
        console.log(`Funcionário: ${this._nome} | Cargo: ${this._cargo} | Salário: ${this._salario}`)
    }
}

let listaFuncionarios: Funcionario[] = []
let continuar: string = ``
let novoFuncionario: Funcionario

while (continuar != `N`){
    let n: string = ``, c: string = ``, s: number = 0
    n = String(prompt(`Insira o nome do funcionario: `))
    c = String(prompt(`Insira o cargo do funcionario: `))
    s = Number(prompt(`Informe o salário do funcionario: `))

    novoFuncionario = new Funcionario (n, c, s)

    listaFuncionarios.push(novoFuncionario)

    continuar = String(prompt(`Deseja adicionar outro funcionário? S-Sim N-Não`))?.toUpperCase()
}

for (let func of listaFuncionarios){
    func.exibirResumo()
}

//ou

// for (let i = 0; i<listaFuncionarios.length; i++){
//     listaFuncionarios[i].exibirResumo()
// }