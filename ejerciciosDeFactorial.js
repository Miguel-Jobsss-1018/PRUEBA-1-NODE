function invertirTexto(oracion){
    const largo = oracion.length;
    let oracionInvertida = " ";
    for (let i = largo - 1; i>= 0; i--){
        oracionInvertida += oracion[i];
    }
    return oracionInvertida;
}

invertirTexto("A Karla la amo mucho, muchisimo");
