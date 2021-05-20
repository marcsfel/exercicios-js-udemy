function operacoesAritmeticas(valor1, valor2){
    this.valor1 = valor1
    this.valor2 = valor2

    this.somar = function(){
        return this.valor1 + this.valor2
    }
    this.subtrair = function(){
        return this.valor1 - this.valor2
    }
    this.multiplicar = function(){
        return this.valor1 * this.valor2
    }
    this.dividir = function(){
        return this.valor1 / this.valor2
    }
}

const op1 = new operacoesAritmeticas(4, 2)
console.log(op1.somar())
console.log(op1.subtrair())
console.log(op1.multiplicar())
console.log(op1.dividir())


/**
 * Resposta COD3R
 * function calcularOperacoes (operador1, operador2) {
 *  console.log(operador1+operador2, operador1-operador2, operador1*operador2, operador1/operador2);
 *  }
 * calcularOperacoes(1, 2)
*/