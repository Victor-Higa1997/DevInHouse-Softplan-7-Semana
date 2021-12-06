

const lista1 = ['Victor', 'João', 'Antonio']
const lista2 = ['Higa', 'Silva', 'Santos']

concatena = (valor, valor2) => {
    novoArray = [...valor, ...valor2]
    return console.log(novoArray)
}

concatena(lista1, lista2)