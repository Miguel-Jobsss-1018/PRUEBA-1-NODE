function sumatoriaDeImporte(numero){
    let numeroPorNumero = 0;
    for(let i = 0; i < numero.length; i++){
        if(numero[i]< 3000 && numero[i]>0){
            numeroPorNumero = numero[i] + numeroPorNumero
            console.log(numero[i])
        }
    }
    console.log(numeroPorNumero)
    return numeroPorNumero;
}

sumatoriaDeImporte([300, -1500, 2500, 500, 4000, 2000, -200]);