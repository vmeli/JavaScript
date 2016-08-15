function cantidadDigitos(numero){
	if(numero>0){
	return "El número "+numero+" tiene "+(numero.toString()).length+" dígitos"
	}else{
		return "El número debe ser positivo"
	}
}
var numero=parseInt(prompt("Ingrese el número entero positivo"))
alert(cantidadDigitos(numero))


