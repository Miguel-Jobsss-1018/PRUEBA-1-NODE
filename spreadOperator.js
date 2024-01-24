// SpreadOperator con solo lista de array, bien facil, no olvides los tres puntitos
let peliculasSuperHeroes = ["Super Man", "Batman", "Iron Man", "Ant man", "Spider Man"];
let peliculasDeAmor = ["Cuestión de tiempo", "Yo antes de tí", "Diario de una Pación", "El amor en tiempos de colera"];
let peliculasDeTerror = ["Hablame", "La Monaja", "El telefono Negro"];

let todasLasPeliculas = [...peliculasSuperHeroes, ...peliculasDeAmor, ...peliculasDeTerror];

console.log(todasLasPeliculas);

//  SpreadOperator con objetos literales

/*let soldadoAnonimo = {
    nombre: "Soldado Anónimo",
    duración: 120,
    genero: "Drama",

};
 let willyWonka = {
    nombre: "Willy Wonka",
    duración: 100,
    genero: "Comedia",
    ...pelicula    
 };

 let contucion = {
    nombre: "Contución",
    duración: 120,
    genero: "Drama Historico",
    ...pelicula
 };

 
console.log(soldadoAnonimo);
console.log(willyWonka);
console.log(contucion);*/

// ----------------------------------------------------------------------------------------------------
// Spread Operator con funciones

 function peliculasVistas(...nombreDePeliculas){
    for (let i = 0; i < nombreDePeliculas.length; i++){
        console.log("Ya ví la película de" + nombreDePeliculas[i]);
    }
 }

peliculasVistas("Guerra Mundial Z", "Gozilla", "Lala Lan");

// --------------------------------------------------------------------------------------------------------
// Hay vamos otra vez con el Spread Operator, tenemos que intentarlo 
let auto1 = {
    marca: "Ferrari",
    km: 0,
    anio: 2019
};

let auto2 = {
    marca: "Porch",
    km: 13000,
    anio: 2000
}

let corredorUno = {
    nombre: "Pablo",
    edad: 29,
    ...auto1
};

let corredorDos = {
    nombre: "Paco Chavez",
    edad: 39,
    ...auto2
};

console.log(auto1);
console.log(auto2)
console.log(corredorUno);
console.log(corredorDos);