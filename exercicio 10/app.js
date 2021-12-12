

const consultaGato = async () => {
    try {
        let res = await fetch('https://api.thecatapi.com/v1/images/search')
        res = await res.json()

        criaElemento(res[0].url)
    } catch (error) {
        console.log(error)
    }

}
const criaElemento = (url) => {
    var lista = document.querySelector('pre')

    var imagem = document.createElement('img')
    var br = document.createElement('br')

    imagem.src = url
    imagem.width = '600'
    imagem.height = '600'

    lista.appendChild(imagem)
    lista.appendChild(br)
}


document.getElementById('consulta').addEventListener('click', consultaGato)
