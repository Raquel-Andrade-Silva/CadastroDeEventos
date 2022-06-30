let dataAtual = new Date()
let dataEvento = new Date("2022-07-01")

console.log("A data de hoje eh:", dataAtual)
console.log("A data do evento sera:", dataEvento)

if(dataEvento > dataAtual) {
    console.log("Data valida, cadastro permitido")
} else {
    console.log("Data invalida, cadastro nao permitido")
}


let idadeParticipante = 22

if(idadeParticipante >= 18 ) {
    console.log("Idade valida, participante incluido")
} else {
    console.log("Idade insuficiente, impossivel incluir participante")
}

let quantidadeParticipante = 90

if(quantidadeParticipante <= 100) {
    console.log("Cadastro permitido")
} else {
    console.log("Limite de participantes excedido, cadastro nao permitido")
}