import { Produto } from './Produto.js'

const totalProdutos = (...produtos) => {
    
    const total = produtos.reduce((totalValor, produto) => {
        return totalValor += (produto.valor * produto.quantidade)
    }, 0)
    console.log(produtos)
    console.log(`total: R$${total.toFixed(2)}`)
}

totalProdutos(new Produto('Produto Guardanapo', 2,  3.00),new Produto('Produto Lava Roupas', 1, 5.00))
