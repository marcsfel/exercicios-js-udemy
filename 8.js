function recorde(score){
    let resultados = score.split(',')
    let maiorPontuacao = resultados[0]
    let menorPontuacao = resultados[0]
    let qntdRecord = 0
    let piorResultado = 1

    for(let i = 1; i < resultados.length; i++){
            if(parseInt(resultados[i]) > maiorPontuacao){
                maiorPontuacao = parseInt(resultados[i])
                qntdRecord++
            } else if(parseInt(resultados[i]) < menorPontuacao)
            console.log(menorPontuacao)
            menorPontuacao = parseInt(resultados[i])
            piorResultado = i
    }
    console.log([qntdRecord, piorResultado])
}

recorde("10,20,20,8,25,3,0,30,1")