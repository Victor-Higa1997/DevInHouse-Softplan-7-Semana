import { converterJsonEmEndereco } from "./Endereco.js"

function consultaCep(){
    const cep = document.querySelector('input').value
    const resultadoApi = document.querySelector('pre')

    const url = fetch(`https://viacep.com.br/ws/${cep}/json`)
        .then(response =>  response.json()
        )
        .then(data => {
            var resultado = converterJsonEmEndereco(data.cep, data.logradouro, data.complemento, data.bairro,
                data.localidade, data.uf, data.ibge, data.gia, data.ddd, data.siafi)
                //console.log(a)

            for(var key in resultado){
                var valor = resultado[key]
                resultadoApi.innerHTML += `${key} : ${valor} </br>` 
            }
        }
    )
}

document.getElementById('consulta').addEventListener('click', consultaCep)