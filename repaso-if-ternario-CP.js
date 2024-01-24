/* Vamos a poner en práctica el if ternario. En este escenario vamos a contar con dos bicicletas y nos interesa saber cuál tiene el rodado más grande.
Para esto, a la variable marcaRodadoMasGrande debemos asignarle la marca de la bicicleta (como string) utilizando un operador ternario. El operador 
ternario debe comparar los rodados de ambas bicicletas y retornar el nombre de la marca que tenga el mayor rodado.
Las marcas esperadas son los strings: "Mountain Bike" o "Aurora"*/

let rodadoMountainBike = 18;
let rodadoAura = 24;

let marcaRodadaMasGrande = rodadoAura > rodadoMountainBike ? "Aurora" : "Mountain Bike";

console.log("La bicicleta con la rodada más grande es " + marcaRodadaMasGrande);

// Variaciones de este ejercicio para asimilarlo mejor.


let miguel = 28;
let pablo = 29;
let karla = 33;

let quienEsMasGrande = karla > pablo ? "Karla" : "Pablo";

console.log("La persona más grande es " + quienEsMasGrande);

// Más variaciones de este ejercicio, nota, no importa el orden de los datos que comparas mientras mantegas la estrucutra. 

let ciudadDeMexico = 90000
let ciudadDeBuenosAires = 30000

let queCiudadTieneMasHabitantes = ciudadDeBuenosAires > ciudadDeMexico ? "Ciudad de Buenos Aires" : "CDMX";

console.log("La ciudad con más habitantes es " + queCiudadTieneMasHabitantes);