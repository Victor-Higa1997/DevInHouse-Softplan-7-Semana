

let resultado = (...valores) => {
    return valores.reduce((valorTotal, valor) => valorTotal * valor)
}

console.log(resultado(2,3,3,5,2))
