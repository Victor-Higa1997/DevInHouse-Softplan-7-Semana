
export class Endereco{
    constructor(cep, logradouro, complemento, bairro, localidade, uf, ibge, gia, ddd, siafi){
        this.cep = cep
        this.logradouro = logradouro
        this.complemento = complemento
        this.bairro = bairro
        this.localidade = localidade
        this.uf = uf
        this.ibge = ibge
        this.gia = gia
        this.ddd = ddd
        this.siafi = siafi
    }
}

export function converterJsonEmEndereco(cep, logradouro, complemento, bairro, localidade, uf,
    ibge, gia, ddd, siafi){

    let endereco = new Endereco(cep, logradouro, complemento, bairro, localidade, uf,
        ibge, gia, ddd, siafi)
    
    return endereco    
}