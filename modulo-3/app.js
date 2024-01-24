let a = "Hola mundo";

let autosX = [
    {
    marca: "Toyota",
    modelo: "Corolla",
    precio: 100000,
    km: 0,
    color: "Blanco",
    cuotas: 14,
    anio: 2019,
    patente: "JJK116",
    vendido: true
    },
      {
    marca: "Nissan",
    modelo: "Corolla",
    precio: 100000,
    km: 0,
    color: "Blanco",
    cuotas: 14,
    anio: 2019,
    patente: "JJK116",
    vendido: true
    }
];

const concesionaria = {
    autos: autosX,
    buscarAuto: function(patente){
       let autoBuscado = this.autos.find(function(auto){
          return auto.patente == patente;
       });
       if (autoBuscado){ 
          return autoBuscado;
       } else {
          return null;
       }
    },
    venderAuto: function(patente){
       let autoAVender = this.buscarAuto(patente); 
       if (autoAVender != null){
          autoAVender.vendido = true;
       }
    },
    autosParaLaVenta: function(){
       let autoBuscado = this.autos.filter(function(auto){
          return auto.vendido == false;
       });
       return autoBuscado;
    },
    autosNuevos: function(){
       let autosKm = this.autosParaLaVenta().filter(function(auto){
          return auto.km  <= 100;
       });
       return autosKm;
    },
    listaDeVentas: function() {
       let autosVendidos = this.autos.filter(function(auto) {
          return auto.vendido == true;
       });
       console.log("autos vendidos", autosVendidos);
       return autosVendidos.map(function(auto) {
          return auto.precio;
       });
    },
    totalDeVentas: function() {
       return this.listaDeVentas().reduce(function(acum, autoVendido) {
          return acum + autoVendido;
       }, 0);
    }
 };
 
 console.log(concesionaria.listaDeVentas());
 console.log(concesionaria.totalDeVentas());

 
 let listaDePagos = {
    nombre: "Juan",
    capacidadDePagoEnCuotas: 20000,
    capacidadDePagoTotal: 100000
    };
    