function jurosSimples(capInicial, taxa, tempo){
    return capInicial + capInicial * tempo * taxa
}

function jurosComposto(capInicial, taxa, tempo){
    return capInicial * (1 + taxa) ** tempo
}

console.log('Juros Simples: ' + jurosSimples(1000, 0.10, 6/12).toFixed(2))
console.log('Juros composto:' + jurosComposto(1000, 0.10, 6/12).toFixed(2))