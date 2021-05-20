function bhaskara(ax2, bx, c){
    let delta
    let resultado = []
    delta = ((bx ** 2) - 4 * (ax2 * c))
    
    if(delta < 0)
        return resultado = 'Delta negativo: ' + delta

    else{
        resultado.push((-bx + Math.sqrt(delta))/ (2 * ax2).toFixed(2))
        resultado.push((-bx - Math.sqrt(delta))/ (2 * ax2).toFixed(2))
    return resultado
}

    

}

console.log(bhaskara(3, -5, 12))
