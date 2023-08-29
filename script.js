

const convertButton = document.querySelector(".convert-Button")
const currencySelectConvert = document.querySelector(".currency-select-convert")
const currencySelectConverted = document.querySelector(".currency-select-converted")



function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
     //const currencyValueToConvert = document.querySelector(".currency-value")//valor a converter
    const currencyValueConverted = document.querySelector(".currency-value-converted")//valor a ser convertido

     //const realToday = 1
    const dolarToday = 5.2
    const euroToay = 6.2
    const bitCoinToday = 130.227025
    const libraToday = 7

    if (currencySelectConvert.value == "real") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)// verificar
    }
    /*if (currencySelectConvert.value == "dolar") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)// verificar
    }
    if (currencySelectConvert.value == "euro") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)// verificar
    }

    if (currencySelectConvert.value == "libra") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "GBP",
        }).format(inputCurrencyValue)// verificar
    }
    if (currencySelectConvert.value == "bitcoin") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC",
            minimumFractionDigits: 8
<<<<<<< HEAD
        }).format(inputCurrencyValue)
    }*/
=======
        }).format(inputCurrencyValue)// verificar
    }
>>>>>>> bc899bb22ca424a7d73958e2de7d4d4fe8d3e6fc

    /*if (currencySelectConverted.value == "real-1") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue / realToday)// verificar
    }*/
    if (currencySelectConverted.value == "dolar-1") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)// verificar
    }
    if (currencySelectConverted.value == "euro-1") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToay)// verificar
    }
    if (currencySelectConverted.value == "libra-1") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)// verificar
    }
    if (currencySelectConverted.value == "bitcoin-1") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC",
            minimumFractionDigits: 8
        }).format(inputCurrencyValue / bitCoinToday)// verificar
    }
}
convertValues()

function changeSelect() {
    // const currencyConvert = document.getElementById("currency-convert")
    const currencyConverted = document.getElementById("currency-converted")
    // const currencyImageConvert = document.querySelector(".currency-img-convert")
    const currencyImage = document.querySelector(".currency-img-converted")

    /*if (currencySelectConvert.value == "dolar") {
        currencyConvert.innerHTML = "Dólar americano"
        currencyImageConvert.src = "./assets/EstadosUnidos.png"
    }
    if (currencySelectConvert.value == "euro") {
        currencyConvert.innerHTML = "Euro",
            currencyImageConvert.src = "./assets/Euro.png"
    }
    if (currencySelectConvert.value == "libra") {
        currencyConvert.innerHTML = "Libra",
            currencyImageConvert.src = "./assets/libra 1.png"
    }
    if (currencySelectConvert.value == "bitcoin") {
        currencyConvert.innerHTML = "BitCoin",
            currencyImageConvert.src = "./assets/bitcoin 1.png"
    }
    if (currencySelectConvert.value == "real") {
        currencyConvert.innerHTML = "Real",
            currencyImageConvert.src = "./assets/brasil 2.png"
    }*/

    convertValues()

    if (currencySelectConverted.value == "real-1") {
        currencyConverted.innerHTML = "Real"
        currencyImage.src = "./assets/brasil 2.png"
    }
    if (currencySelectConverted.value == "dolar-1") {
        currencyConverted.innerHTML = "Dólar americano"
        currencyImage.src = "./assets/EstadosUnidos.png"
    }
    if (currencySelectConverted.value == "euro-1") {
        currencyConverted.innerHTML = "Euro",
            currencyImage.src = "./assets/Euro.png"
    }
    if (currencySelectConverted.value == "libra-1") {
        currencyConverted.innerHTML = "Libra",
            currencyImage.src = "./assets/libra 1.png"
    }
    if (currencySelectConverted.value == "bitcoin-1") {
        currencyConverted.innerHTML = "BitCoin",
            currencyImage.src = "./assets/bitcoin 1.png"
    }

    changeSelect()
    convertValues()

}

// currencySelectConvert.addEventListener("change", changeSelect)
currencySelectConverted.addEventListener("change", changeSelect, convertValues)
convertButton.addEventListener("click", convertValues)
