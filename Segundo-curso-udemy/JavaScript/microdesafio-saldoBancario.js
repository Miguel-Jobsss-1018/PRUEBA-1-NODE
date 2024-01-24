let operacionesBancarias = [1000, -5000, 1500, -7000, -3000, 3000];

function saldoTotal (operacionesBancarias){
    let saldo = 49500;
    let depositos = 0;
    let retiros = 0;
    let totalDeOperaciones = [];
    for (let i = 0; i<= operacionesBancarias.length; i++){
        if (operacionesBancarias[i]>0){
            depositos = depositos + operacionesBancarias [i];
            saldo = saldo + operacionesBancarias [i];
        } else if (operacionesBancarias[i]< 0){
            retiros = retiros + operacionesBancarias [i];
            saldo = saldo + operacionesBancarias [i];
        }
    }
    totalDeOperaciones = [saldo, depositos, retiros];
    return totalDeOperaciones;
}

function datosDeClientes (nombre, apellido, operacionesBancarias){
    let cliente = nombre + " " + apellido;
    let total = saldoTotal (operacionesBancarias);
    console.log ("Estimada " + cliente + ":");
    console.log ("El monto total de los depositos es de: $" + total[1]);
    console.log ("El monto total de los retiros es de: $" + total[2]);
    console.log ("Por lo tanto el saldo actual, en la cuenta es de: $" + total[0]);

}

datosDeClientes ("Gloria", "Medina", operacionesBancarias);

console.log(datosDeClientes);


