function pasandoPorI (){
    for (let i = 0; i<6; i++){
        console.log("acá i tiene el valor de " + i);
    }
}
pasandoPorI();

// Contodadores 
function noParesDeContarImparesHasta(numero) {
    let contadorImpares = 0;

    for (let i = 0; i <= numero; i++) {
        if (i % 2 !== 0) {
            // Si el número es impar, incrementa el contador
            contadorImpares++;
        }
    }

    return contadorImpares;
}

// Ejemplo de uso
console.log(noParesDeContarImparesHasta(10));
// Debería imprimir 2, que se obtiene contando los impares 1 y 3.


// Tabla de multiplicar con While o dowhile
function tablaDeMultiplicar(numero) {
    let i = 1
    while (i <= 10){
        console.log (numero + " * " + i + " = " + numero * i); i++;
    }  
}

tablaDeMultiplicar(7);
