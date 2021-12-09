

const consultaGato = () => {
    fetch('https://api.thecatapi.com/v1/images/search')
        .then(resposta => {
            return resposta.json()
        })
        .then(dados => {
            criaElemento(dados[0].url)
        })
        .catch(function () {
            console.log('Erro: Link quebrado!');
        });

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
