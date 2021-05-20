function verificarTriangulo(lado1, lado2, lado3) {
    if (lado1 == lado2 && lado2 == lado3)
        console.log('Triangulo Equilátero')
    else if (lado1 == lado2 || lado2 == lado3 || lado1 == lado3)
        console.log('Triangulo Isósceles')
    else console.log('Triangulo Escaleno')
}

verificarTriangulo(2, 3, 2)