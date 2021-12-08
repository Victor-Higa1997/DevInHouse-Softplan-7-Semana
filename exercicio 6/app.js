import { converterJsonEmEndereco } from "./Endereco.js"
const resultadoApi = document.querySelector('pre')

const consultaCep = () =>{
    const cep = document.querySelector('input').value
    

    const url = fetch(`https://viacep.com.br/ws/${cep}/json`)
        .then(response =>  response.json()
        )
        .then(data => {
            console.log(data)
           
            var resultado = converterJsonEmEndereco(data.cep, data.logradouro, data.complemento, data.bairro,
                data.localidade, data.uf, data.ibge, data.gia, data.ddd, data.siafi)
                //console.log(a) */     

             for(var key in resultado){
                var valor = resultado[key]
                
                criaElemento(key, valor)
            }
        }
    )
}


const criaElemento = (chave, valor) => {
    const pre = document.querySelector('pre')

    //CRIA ELEMENTOS
    var div = document.createElement('div')
    var fieldset = document.createElement('fieldset')
    var p = document.createElement('p')

    //STYLE DOS ELEMENTOS

    p.innerHTML =  `${chave}: ${valor}`

    div.appendChild(p)
    fieldset.appendChild(div)
    pre.appendChild(fieldset)
}

document.getElementById('consulta').addEventListener('click', consultaCep)