// Función expresada: Ejemplo}
let sumar = function (numeroA, numeroB){
    return numeroA + numeroB;
}
console.log (sumar(10,8));

// Funcion de clarada: Ejemplo 
function restar ( numeroC, numeroD) {
    return numeroC - numeroD;
}
console.log (restar (10,5));

// Ejemplo de una función Scope
let mensaje = "Hola";
function saludar (){
    let mensaje = "Adios"
    return mensaje;
}
console.log (saludar ());
console.log (mensaje);

