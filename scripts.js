let botao = document.getElementById("button")
let select = document.getElementById("Select-Moedas")

//Esta funcao e responsavel pela troca dos numeros  
//"async"= significa que e uma funcao asincrona com o site que vai buscar info do site 
//"await"= ele vai esperar a resposta do site,  ".then"=significa entao
//".json"= e um tipo de formato e por ultimo "return"= que retorna a resposta moedas 
async function converterMoedas() {

    let moedas = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL").then(function (Resposta) {
        return Resposta.json()
    })

    let dolar = moedas.USDBRL.high
    let euro = moedas.EURBRL.high
  
    console.log(dolar)
    console.log(euro)

    let inputValorEmReais = Number(document.getElementById("input").value)
    let inputmoedas = document.getElementById("Input-moedas")
    let TextoReal = document.getElementById("Texto-Real")

    // If significa "SE" e "===" serve para comparar as variaveis
    if (select.value === "US$ Dolar Americano") {
        let valorEmDolares = inputValorEmReais / dolar
        inputmoedas.innerHTML = valorEmDolares.toLocaleString("en-US", { style: "currency", currency: "USD" })
    }

    if (select.value === "€ Euro") {
        let ValorEmEuro = inputValorEmReais / euro
        inputmoedas.innerHTML = ValorEmEuro.toLocaleString("de-DE", { style: "currency", currency: "EUR" })
    }

    TextoReal.innerHTML = inputValorEmReais.toLocaleString("pt-br", { style: "currency", currency: "BRL" })
}

//Esta funcao e responsavel por trocar a bandeira e o nome das moedas
function TrocaDeMoeda() {
    let TextoMoedas = document.getElementById("Texto-Moedas")
    let BandeiraMoedas = document.getElementById("Bandeira-Moedas")

    if (select.value === "US$ Dolar Americano") {
        TextoMoedas.innerHTML = "Dolar Americano"
        BandeiraMoedas.src = "./img/Dolar.png"
    }

    if (select.value === "€ Euro") {
        TextoMoedas.innerHTML = "Euro"
        BandeiraMoedas.src = "./img/Euro.png"
    }

    converterMoedas()

}
// Botao de Evento que estao ouvindo o botao e a troca de Dolar para euro
botao.addEventListener("click", converterMoedas)
select.addEventListener("change", TrocaDeMoeda)

