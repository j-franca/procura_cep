let consulta = document.getElementById('consulta')
let estado = document.getElementById('estado')
let cidade = document.getElementById('cidade')
let bairro = document.getElementById('bairro')
let rua = document.getElementById('rua')
let res = document.getElementById('res')

consulta.addEventListener('click', ()=>{
    let valor_cep = document.getElementById('valor_cep').value
    console.log(valor_cep)

    const cep = new XMLHttpRequest()
    cep.open('GET', 'https://viacep.com.br/ws/' + valor_cep + '/json/')
    cep.send()
    console.log(cep)

    cep.onload = function(){
        // document.getElementById('cep_cidade').innerHTML
        let pesq_cep = JSON.parse(cep.responseText)
        
        pesq_cep.uf = estado.innerHTML
        pesq_cep.localidade = cidade.innerHTML
        pesq_cep.bairro = bairro.innerHTML
        pesq_cep.logradouro = rua.innerHTML
        
        console.log(pesq_cep)
        
        // res.innerHTML = ''

        // if((pesq_cep.bairro === 'undefined')){
        //     res.innerHTML = `O CEP refere ${pesq_cep.localidade}`
        // }else{
        //     res.innerHTML = `O CEP refere ${pesq_cep.localidade} na rua ${pesq_cep.logradouro} no bairro ${pesq_cep.bairro}`
        // }
        // res.innerHTML = `O CEP refere ${pesq_cep.localidade} na rua ${pesq_cep.logradouro} no bairro ${pesq_cep.bairro}`
    }
})

// cadastrado
const cadastrado = document.querySelector('#cadastrado')
cadastrado.addEventListener('click', ()=>{
    alert('Cadastrado com sucesso!')
})