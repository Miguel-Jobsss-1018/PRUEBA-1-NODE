let amigos = ["Berenice", "Edilberto", "Alejandra", "Tania", "Mariana", "Nudo", "Juan"];

//console.log(amigos);

let amigosJSON = JSON.stringify(amigos);

//console.log(amigosJSON);

let amigosOriginal = JSON.parse(amigosJSON);

console.log(amigosOriginal);

let persona = {
    nombre: "Karla",
    edad: 33,
    recidencia: "CDMX",
    caracteristicasParticulares: "Tatuajes en todo su cuerpo",
    sexo: "femenino",
};

let personaJSON = JSON.stringify(persona);

console.log(personaJSON);