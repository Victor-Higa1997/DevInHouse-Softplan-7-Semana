
export class Endereco {
    constructor(cep, logradouro, complemento, bairro, localidade, uf, ibge, gia, ddd, siafi) {
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

export function converterJsonEmEndereco(data) {

    return new Endereco(
        data.cep, 
        data.logradouro, 
        data.complemento, 
        data.bairro, 
        data.localidade, 
        data.uf,
        data.ibge, 
        data.gia, 
        data.ddd, 
        data.siafi
    )
}