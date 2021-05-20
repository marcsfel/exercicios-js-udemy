Fatorial = (x) => {
    let aux = x
    let i = 1
    while(i<x){
        aux = i * aux
        i++
    }
    console.log(aux)
}



Fatorial(5)