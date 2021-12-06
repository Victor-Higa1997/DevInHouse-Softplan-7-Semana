
const euNaoEspero = () => {
    aguarda5Segundos()
    console.log('Eu não espero')
}

const euEspero = async () => {
    await aguarda5Segundos()
    console.log('Eu espero')
}

async function aguarda5Segundos() {
    await new Promise(resolve => setTimeout(resolve, 3000)); // 3 sec
    console.log("Função diz: Terminei!")
}

euNaoEspero()
euEspero()