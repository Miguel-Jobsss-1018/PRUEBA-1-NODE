// Metodos de Array II MAap 
let notas = [10, 4, 5, 3, 9, 8, 7, 2, 1, 2, 5, 6]; 

let notasHastaEl1100 = notas.map(function(numero){
    return numero * 10;
});

// console.log(notasHastaEl1100);

// Metodos de Array II filter
let notasAprobatorias = notas.filter(function(numero){
    return numero >= 6;
});

console.log(notasAprobatorias)


// Metodos de Array II reduce
let sumaNotas = notas.reduce(function(estado, numero){
    return estado + numero;
});

console.log(sumaNotas);

// Metodos de Array II For Each
notas.forEach(function(valor, indice){
    console.log("En la posición " + indice + " tengo el valor " + valor);
});

