//Operadores de Asignación 
let miNumero = 20;
console.log(miNumero); 

/*let miNumero = 10; en mi Visual Studio genera error, pero en el curso y no genera error, no sé porque, ya entedí fue por el Let
console.log(miNumero);*/


// Operadir +=
miNumero += 5;
console.log(miNumero);

// Operador -=
miNumero -= 13;
console.log(miNumero)

// Operador *=
miNumero *= 2;
console.log(miNumero);

// Operdar de división
miNumero /= 2;
console.log(miNumero);

// Operador mi módulo %
miNumero %= 2;
console.log(miNumero);

miNumero += 20;

// Operador de potencia
miNumero **= 2;
console.log(miNumero);

// OPERADORES DE COMPARACIÓN O RELACIONALES
let a = 5;
let b = "5";

// Operdaores de igualdad ==
// Solo compara valores y hace una conversación si es nesesario.
console.log("a == b ->", a == b);

// String interpolation 
console.log(`${a} == ${b} -> ${a == b}`);

// Operador igualdad estricta o exacto
// se compara el valor y el tipo de dato.
console.log("a === b ->", a === b);

// String interpolation estricto
console.log(`${a} === ${b} -> ${a === b}`);

// Operador distintos
// Compara valor y covierte el tipo de dato si es necesario
console.log(`${a} != ${b} -> ${a != b}`);

// Operador distinto exacto
// compara el tipo de dato y el valor.
console.log(`${a} !== ${b} -> ${a !== b}`);

// Operador menor que 
console.log(`${a} < ${b} -> ${a < b}`);

// Operdor menor o igual que 
console.log(`${a} <= ${b} -> ${a <= b }`);

// Operador mayor que 
console.log(`${a} > ${b} -> ${a > b }`);

// Operador mayor que o igual que
console.log(`${a} >= ${b} -> ${a >= b }`);

/* Operdores Lógicos
*/

 // Operadores Lógicos

 let aa = true;
 let bb = false;
 // Operador Lógico de && (and o Y) cuando un valor es falso, regresa falso.
 console.log(`${aa} && ${bb} -> ${aa && bb}`);

 // Operador lógico de ||, cuando un valor es falso aún regresa verdadero.
 console.log(`${aa} || ${bb} --> ${aa || bb}`)

 // Operador logico de No o not ! invierte el valor original.
 console.log(`${aa} -> ${!aa}`);
 console.log(`${bb} -> ${!bb}`);

 // Valores dentro de rango
 let minimo = 5;
 let maximo = 15;
 // Revisar el siguiente dato al azar para saber si esta dentro del rango.
 let datoAlAzar = 7;

 let dentroDeRango