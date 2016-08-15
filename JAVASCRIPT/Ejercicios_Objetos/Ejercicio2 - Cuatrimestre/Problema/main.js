var meses={
	primerCuatrimestre: ["enero","febrero","marzo","abril"],
	segundoCuatrimestre: ["mayo","junio","julio","agosto"],
	tercerCuatrimestre: ["setiembre","octubre","noviembre","diciembre"]
}

var mes=(prompt("ingrese el mes actual")).toLowerCase()
var p=0
for(var i in meses){
	for(var k=0;k<3;k++){
		if(meses[i][k]==mes){
			alert("Te encuentras en el "+i)
		}else{
			p+=1
		}
	}

	if(p==9){
	alert("El mes no es válido vuelve a ingresar")
	}

}



// tener el objeto ya definido
// mostrarPropiedades(meses, "mes");
// mes.primerCuatrimestre = []  va imprimir esta cadena

//preguntar luego como funciona?
// function mostrarPropiedades(objeto, nombreObjeto) {
//   var resultado = "";
//   for (var i in objeto) {
//     if (objeto.hasOwnProperty(i)) {
//         resultado += nombreObjeto + "." + i + " = " + objeto[i] + "\n";
//     }
//   }
//   return resultado;
// }