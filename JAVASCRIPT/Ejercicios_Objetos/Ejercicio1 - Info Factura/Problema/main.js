var factura={
				empresa:{
							nombre:"Tai Loy",
						 	direccion:"Miraflores",
						 	telefono:3333333,
						 	NIF:"B55555555"
						 },

				cliente:{	
							nombre:"Carla Mendoza",
							direccion:"Miraflores",
							telefono:3456789,
							DNI:40348722,
						},

				articulo:[	
							{
								descripcion:"Faber-Castell  Tinta seca azul punta mediana",
								precio:3,
								cantidad:10
							}
						],

                montoTotal:null,

				tipoIva:13,

				formaPago:14,

				importeTotal:function(){ this.montoTotal=(this.articulo[0].precio)*(this.articulo[0].cantidad)*this.tipoIva}

}

factura.importeTotal()
alert("El monto total de la factura :"+factura.montoTotal+" soles")
















// for(i in factura){
// 	for(j in factura[i]){
// 		if(typeof factura[i][j]=="string"){
// 			factura[i][j]=prompt("Ingrese el dato "+i+" "+j)
// 		}else if(typeof factura[i][j]=="number"){
// 			factura[i][j]=parseFloat(prompt("Ingrese el dato"+i+" "+j))
// 		}else if(typeof factura[i][j]=="function"){

// 		}else if(){

// 		}
// 	}

// }








// var numberFacturas=parseInt(prompt("Ingrese la cantidad de facturas a registrar"))
// var longitud=allFactura.length

// for(i=0;i<longitud;i++){
//   for(j in allFactura[i]){
//     allFactura[i][j]= prompt("Ingresa "+j+" de "+allFactura[i])
//   }
// }


// =====================================================0



// for(i in allFactura){

//   inversion[i] = prompt("Ingresa "+i);

// }


// for(i=0;i<numberFacturas;i++){
//   var factura={}
//   alert("Ingrese los datos de la empresa")
//     factura.empresa[nombre]=prompt("Ingrese el nombre de la empresa")
//     factura.empresa[direccion]=prompt("Ingrese la dirección de la empresa")
//     factura.empresa[telefono]=prompt("Ingrese el teléfono de la empresa")
//     factura.empresa[nif]=prompt("Ingrese el nif de la empresa")
//   alert("Ingrese los datos del cliente")
//     factura.cliente[nombre]=prompt("Ingrese el nombre de la empresa")
//     factura.cliente[direccion]=prompt("Ingrese la dirección de la empresa")
//     factura.cliente[telefono]=prompt("Ingrese el teléfono de la empresa")
//     factura.cliente[dni]=prompt("Ingrese el nif de la empresa")
// }

// \td para espaciar






// var factura={
//   "empresa":{nombre: "Carsa",
//         direccion:"Av. Arequipa",
//         telefono:2324543,
//         NIF:"A26003921"},
//   "cliente":{nombre: "Carsa",
//         direccion:"Av. Arequipa",
//         telefono:2324543,
//         DNI:"A26003921"},
//   "articulo":{ descripcion:"",
//          precio:0,
//          cantidad:0},
//   "importeTotal":0,
//   "tipoIva":0,
//   "formaPago":""
// }
// /********************************/
// var f = {}

// f.empresa = {}

// // empresa
// var nombre = prompt("Ingrese el nombre de la empresa");
// var direccion = prompt("Ingrese la direccion de la empresa");

// f.empresa.nombre = nombre
// f.empresa.direccion = direccion

// f.cliente = {}

// // cliente
// var nombreCliente = prompt("Nombre del cliente")
// f.cliente.nombre = nombreCliente;

// // articulo


// // importe total
// var importeTotal;
// f.importeTotal = importeTotal;