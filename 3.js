function exponenciacao(base, expoente) {
    // Modo antigo
    let resultado = Math.pow(base, expoente)

    resultado = base ** expoente
    return resultado
}

console.log(exponenciacao(2, 3))