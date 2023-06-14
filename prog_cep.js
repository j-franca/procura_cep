let consulta = document.getElementById('consulta')
let res = document.getElementById('res')

console.log(consulta)

consulta.addEventListener('click', ()=>{
    let valor_cep = document.getElementById('valor_cep').value
    console.log(valor_cep)

    const cep = new XMLHttpRequest()
    cep.open('GET', 'https://viacep.com.br/ws/' + valor_cep + '/json/')
    cep.send()
    console.log(cep)

    cep.onload = function(){
        let pesq_cep = JSON.parse(cep.responseText)
        console.log(pesq_cep)

        res.innerHTML = ''
        res.innerHTML = `O CEP refere ${pesq_cep.localidade} na rua ${pesq_cep.logradoura} no bairro ${pesq_cep.bairro}`
    }
})