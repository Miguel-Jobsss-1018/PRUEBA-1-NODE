// Repaso con el ciclo for  04/01/2024
function imprimirAzul (){
    for (let i = 0; i<10; i++){
        console.log ("Azul");
    }
 
}

imprimirAzul();

// Repaso de PasandoPorI y luego lo modificado. 
function pasandoPorI (){
for(let h = 0; h < 20; h++){
    console.log("acá i tiene el valor de x" + h);
}
}

pasandoPorI();

function furtasPrecios (){
    for(let u = 10; u < 20; u++){
        console.log("La fruta cuesta aquí " + u);
    }
}
furtasPrecios();

// No pares de contar impares y modificado. 
function noParesDeContarImparesHasta (numero){
    let contadorImpares = 0;
    for (let i = 0; i <= numero; i++){
        if (i % 2!= 0){
            contadorImpares++;
        }
        return contadorImpares
    }
}

noParesDeContarImparesHasta (20);