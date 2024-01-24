let fs = require('fs');
let superheroes = require('./superHeroes');  // Asegúrate de que la ruta sea correcta
let moment = require('moment');  // Importa moment correctamente

console.log(fs);

let datos = fs.readFileSync(__dirname + '/prueba.txt', 'utf-8');

console.log(datos);

console.log(superheroes);  // Imprime la constante superheroes

// Ejemplo de uso de moment
let fechaActual = moment().format('YYYY-MM-DD');
console.log(fechaActual);
