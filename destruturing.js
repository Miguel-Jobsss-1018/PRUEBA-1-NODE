 let cursos = ["Programción", "JavaScript", "Java", "Paython", "CSS", "HTML"];

 // Destruturación de los Array, van en orden de acuerdo con el array

 let [, javaScript, , ,css] = cursos;

 console.log(cursos);
 console.log(javaScript);
 console.log(css);
// _____________________________________________________________________________________________________

let persona = {
    nombre: "Jorge",
    edad: 56,
    profesion: ["maestro", "teatrero", "circense", "educador"],
    vive: "Cuernavaca",
    trabajo: "PRAE",
};

let {nombre, profesion, trabajo} = persona;

console.log(persona);
console.log(nombre);
console.log(profesion);
console.log(trabajo);


