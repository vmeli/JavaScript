// entrada del usuario
var cantidadSucursales = parseInt(prompt("Ingresa el # de sucursales"))

var totalTienda;
var totalSucursal;
var totalEmpresa = 0;
var separador = "=========================";

// proceso
for (var i = 1; i <= cantidadSucursales; i++) {
	var cantidadTiendas = parseInt(prompt("Ingresa el # de tiendas de la sucursal " + i))
	totalSucursal = 0;
	for (var j = 1; j <= cantidadTiendas; j++) {
		var cantidadEmpleados = parseInt(prompt("Ingresa el # de empleados de la tienda " + j + " de la sucursal " + i))
		totalTienda = 0;
		for (var k = 1; k <= cantidadEmpleados; k++) {
			var ventaEmpleado = parseInt(prompt("Ingresa la venta del empleado " + k + " de la tienda " + j + " de la sucursal " + i))
			document.write("Sucursal: " + i + "<br>Tienda: " + j + "<br>Empleado: " + k + "<br>Venta: " +ventaEmpleado + "<br>" + separador + "<br>");
			totalTienda += ventaEmpleado;
		}
		document.write("Sucursal: " + i + "<br>Tienda: " + j + "<br>Venta: " + totalTienda + "<br>" + separador + "<br>")
		totalSucursal += totalTienda;
	}
	document.write("Sucursal: " + i + "<br>Venta: " + totalSucursal + "<br>" + separador + "<br>")
	totalEmpresa += totalSucursal;
}

// salida
document.write("Venta Total: " + totalEmpresa)




// POR MEJORAR
// var ciudadSucursales=parseInt(prompt("¿Cuántos sucursales desea ingresar datos?"))
// // var ventaTotal=0
// var monto=0
// for(var i=1;i<=ciudadSucursales;i++){
// 	var tiendas=parseInt(prompt("¿Cuántas tiendas tiene la sucursal "+i+" ?"))
// 	for(var j=1;j<=tiendas;j++){
// 		var empleados=parseInt(prompt("Cuántos empleados tiene la sucursal "+i+" de la tienda "+j))
		
// 		for(var k=1;k<=empleados;k++){
// 			var venta=parseInt(prompt("Cuánto vendio el empleado "+k +" de la sucursal "+i+" de la tienda "+j))
// 			for(var r=1;r<=venta;r++){
// 				var precio=parseFloat(prompt("Cuánto es el precio de la venta "+r+" del empleado "+k+" de la sucursal "+i+" de la tienda "+j))
// 			}
// 			// monto+=precio
// 			// alert(monto)
// 		}
		
// 	}
// }
