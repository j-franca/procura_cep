const carro = {
    nome: "Palio",
    marca: "Fiat",
    ano: 2013,
    cor: "azul",
    opcionais: {
        roda: "liga leve",
        aro: 15,
        air_bag: "frente total"
    }
}

console.log(carro)
console.log('---------------------')
console.log(carro.cor)
console.log('---------------------')
console.log(carro.opcionais.aro)
console.log('---------------------')

const carro_str = JSON.stringify(carro)
console.log(carro_str)
console.log('---------------------')