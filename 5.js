function converterNumero(num){
    let numConvertido = num.toFixed(2).toString().replace('.',',');
    return numConvertido
}

console.log(converterNumero(0.520000000001))

