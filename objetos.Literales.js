let primerCursoJavaScript = {
    nombreDelcurso: "JavaScript",
    numeroDeAlumnos: 20,
    docentesDelcurso: ["Miguel", " Jorge", " Berenice", " Lorena"], 
    horarioDelCurso: "17:30 a 20:00 horas.",
    notificaciones: function (){
        return "El horario del curso es " + this.horarioDelCurso
        },
    segundoAviso: function (){
        return "No olvides que es importante enviar un mensaje a los profesores " + this.docentesDelcurso 
    }
}
// console.log(curso);

//console.log(curso.docentesDelcurso);
/*console.log("Bienvenido al curso de " + curso.nombreDelcurso);
console.log("Hasta el momento hay 20 compañeros en el curso " + curso.numeroDeAlumnos);
console.log("Los maestros son " + curso.docentesDelcurso);
console.log("El curso comienza a " + curso.horarioDelCurso);*/

//  Métodos de objetos literales

/*console.log(primerCursoJavaScript.notificaciones());
console.log(primerCursoJavaScript.segundoAviso());*/

//  Función construtor de más objetos, para crear más curso en esta situación. 

function Cursos(nombreDelcurso, numeroDeAlumnos, docentesDelcurso, horarioDelCurso){
    this.nombreDelcurso = nombreDelcurso;
    this.numeroDeAlumnos = numeroDeAlumnos;
    this.docentesDelcurso = docentesDelcurso;
    this.horarioDelCurso = horarioDelCurso; 
}

let cursoDePathon = new Cursos(["1000Pathon"], 30, ["Jorge"], "9:00 a 12:00 pm");
let cursoDeCocina = new Cursos(["Cocinando con Lore"], 50, ["Lorena"], "14:00 a 17:00");
let cursoDeMaquillaje = new Cursos(["PonteGuapa"], 60, ["Berenice", "Juan"], "15:00 a 17:00");

console.log(cursoDePathon);
console.log(cursoDeCocina);
console.log(cursoDeMaquillaje);

// Siguiente ejercicio es programador, basado en el deportista.

let programadorMiguel = {
    energia: 100,
    experiencia: 0,
    nombre: "Miguel",
    edad: 28,
    curso: "JavaScript",
    practicaHoras: function(numero){
        this.energia = this.energia - (numero * 5);
        this.experiencia = this.experiencia + (numero *2);
    }
}

console.log("Antes de prácticar el programador Miguel esta en las siguientes condiciones");
console.log("La energía de Miguel es la siguiente " + programadorMiguel.energia);
console.log("Su experiencia es " + programadorMiguel.experiencia);
console.log("Durante la práctica y fin del entrenamiento")
programadorMiguel.practicaHoras(5);
console.log("Energía al final de la práctrica es " + programadorMiguel.energia);
console.log("Experiencia al final de la práctica es " + programadorMiguel.experiencia);
