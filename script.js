const display = document.getElementById("display")
const botoes = document.querySelectorAll(".botao")
const botaoIgual = document.getElementById("equals")
let operacao = ""
const traducao = {
    "zero": 0,
    "one": 1,
    "two": 2,
    "three": 3,
    "four": 4,
    "five": 5,
    "six": 6,
    "seven": 7,
    "eight": 8,
    "nine": 9,
    "add": "+",
    "divide": "/",
    "minus": "-",
    "multiply": "*"
}


botoes.forEach(botao => {
    if (botao != botaoIgual )   
        botao.addEventListener("click", () => {
            operacao += traducao[botao.id]
            display.innerText = operacao
            console.log(operacao)
        })
})


botaoIgual.addEventListener("click", () => {
    let res = eval(operacao)
    display.innerText = res
    console.log(res)
    operacao = ""
})

