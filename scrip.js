let cantidadTurnos = 10;
//let turnoFecha;
//let turnoHora;

let turnoFecha;
let turnoHora;

//function resevaTurno(){
  //  turnoFecha=prompt("Ingrese el día que desea el turno");
    //turnoHora=prompt("Ingrese Hora formaro de 0 a 24 (sin ingresos de minutos)");
//}

function reservaTurno() {

    turnoFecha = prompt("Ingrese el día del turno");
    turnoHora = parseInt(prompt("Ingrese la hora en formarto de 0 a 18"));
  
    if (turnoFecha === "sábado" && (turnoHora >= 14 && turnoHora < 7)) {
      alert("Adolfo Car Detaile está cerrado los sábados a partir de las 14:00. Abrimos a las 8:00.");

    } else if (turnoFecha === "domingo") {
      alert("Adolfo Car Detarile no trabaja los domingos.");
    }
    
   else {
      alert("Su turno está reservado para el " + turnoFecha + " a las " + turnoHora + ":00.");
      
    }
  }
  


for (let i = cantidadTurnos; i > 0; i--) {

    reservaTurno()

    if (cantidadTurnos = 0) {
        alert("No tenemos más turnos para ese día");
    } 
    //alert("Tu turno se encuentra reservado");

    console.log(cantidadTurnos + i)
}

let trabajoARealizar= parseInt(prompt("Selecciona un Vehìculo  lavar:  1- Automóvil  2- Utilitario  3  Camioneta"))

const precioConDescuento= function(precio) {return precio - (precio * 0.10)};

switch(trabajoARealizar){

    case 1:

        let precioAuto = 3000;
        alert("El costo del lavado es $3000, sì nos pagas en el local el precio es " + precioConDescuento(precioAuto));
    break

    case 2: 
    
        let precioUtilitario = 4000;
        alert("El costo del lavado es $4000, sì nos pagas en el local el precio es " + precioConDescuento(precioUtilitario));
        
    break

    case 3:

        let precioCamioneta = 5000;
        alert("El costo del lavado es $5000, sì nos pagas en el local el precio es " + precioConDescuento(precioCamioneta));
        
    break    
}


