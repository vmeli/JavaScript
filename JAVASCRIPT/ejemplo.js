var factura={
	"empresa":{nombre: "Carsa",
				direccion:"Av. Arequipa",
				telefono:2324543,
				NIF:"A26003921"},
	"cliente":{nombre: "Carsa",
				direccion:"Av. Arequipa",
				telefono:2324543,
				DNI:"A26003921"},
	"articulo":{ descripcion:"",
				 precio:0,
				 cantidad:0},
	"importeTotal":0,
	"tipoIva":0,
	"formaPago":""
}
/********************************/
var f = {}

f.empresa = {}

// empresa
var nombre = prompt("Ingrese el nombre de la empresa");
var direccion = prompt("Ingrese la direccion de la empresa");

f.empresa.nombre = nombre
f.empresa.direccion = direccion

f.cliente = {}

// cliente
var nombreCliente = prompt("Nombre del cliente")
f.cliente.nombre = nombreCliente;

// articulo


// importe total
var importeTotal;
f.importeTotal = importeTotal;

****************************************
// Está definición no está bien definido en el problema factura
// los artículos son objetos
// 
// var allFactura=[
//     empresa={
//       nombre:null,
//       direccion:null,
//       telefono:null,
//       NIF:null  
//     },

//     cliente={
//       nombre:null,
//       direccion:null,
//       telefono:null,
//       DNI:null  
//     },
//     articulo={
//       descripcion:null,
//       precio:null,
//       cantidad:null
//     },
//     informacion={
//       importeTotal:null,
//       tipoIva:null,
//       formaPago:null
//     }
// ]


*************************************************






// *********************************
// var a=number() es solo para inicializar pues no es para convertir una cadena en número 
// ahora el parseInt es para convertir una cadena a un número te permite multiplicar y dividir 
// pero tendrá conflictos si no le pones parseInt a la cadena pues al momento de sumar de va a concatenar