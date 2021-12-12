import { converterJsonEmEndereco } from "./Endereco.js"
const resultadoApi = document.querySelector('pre')

const consultaCep = async () => {
    const cep = document.querySelector('input').value

    try {
        let res = await fetch(`https://viacep.com.br/ws/${cep}/json`)

        res = await res.json()

        var resultado = converterJsonEmEndereco(res)

        for (var key in resultado) {
            var valor = resultado[key]

            criaElemento(key, valor)
        }
    } catch (error) {
        console.log(error)
    }
}

const criaElemento = (chave, valor) => {
    const pre = document.querySelector('pre')

    document.querySelector('pre').style.display = 'block'

    //CRIA ELEMENTOS
    var div = document.createElement('div')
    var fieldset = document.createElement('fieldset')
    var p = document.createElement('p')

    //STYLE DOS ELEMENTOS

    p.innerHTML = `${chave}: ${valor}`

    div.appendChild(p)
    fieldset.appendChild(div)
    pre.appendChild(fieldset)
}

const limpar = () => {
    var e = document.querySelector("pre");
    
    //e.firstElementChild can be used.
    var child = e.lastElementChild; 
    while (child) {
        e.removeChild(child);
        child = e.lastElementChild;
    }
}


document.getElementById('consulta').addEventListener('click', consultaCep)
document.getElementById('limpar').addEventListener('click', limpar)