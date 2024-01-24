// if ternario: ejemplo
let fruta = "Sandía"
let resultado = fruta == "Guanábana" ? "Que rico, hoy se me antojo agua de Guanábana" : "Chale, tendre que comer otra vez una manzana amarilla, odio las manzanas amarillas";
console.log (resultado);

// switch: ejemplo
let semaforo = "No prende";
switch (semaforo){
    case "Verde":
        console.log ("Puedo curzar, esta el color verde.");
        break;
        case "Amarillo":
            console.log ("Precaución, ten cuidado, ve bajando la velocidad");
            break;
            case "Rojo":
                console.log ("No se puede cruzar, al menos que quieras morir ese.");
                break;
                default:
                    console.log ("No funciona el semaforo, llama a los servivios de tu alcaldía, antes de que pase un accidente.");
                    break;
}
function tengoClases(dia) {
	switch (dia) {
    case "lunes":
	console.log("tenés clases");
	break;
	case "miércoles":
	console.log("tenés clases");
	break;
	case "viernes":
	console.log("tenés clases");
	break;
	default:
	console.log("no tenés clases");
	break;
	}
}
tengoClases("jueves");

function reporteDePasajeros(estacionesAvanzadas) {
    let pasajerosArribaDelTren = 200;
    let reporte = [];
  
    for (let i = 0; i <= estacionesAvanzadas; i++) {
      if (i === 5) { // Estación Florida
        pasajerosArribaDelTren = pasajerosArribaDelTren + 120 - 80;
      } else {
        pasajerosArribaDelTren = pasajerosArribaDelTren + 50 - 30;
      }
  
      reporte.push(`En la estación ${i} hay ${pasajerosArribaDelTren} pasajeros arriba del tren`);
    }
  
    return reporte;
  }
  
  // Ejemplos de uso:
  
  console.log(reporteDePasajeros(0));
  console.log(reporteDePasajeros(3));
  console.log(reporteDePasajeros(5));
  