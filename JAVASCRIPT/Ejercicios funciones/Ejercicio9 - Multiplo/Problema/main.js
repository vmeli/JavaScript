function multiple(numero){
	var cadena=""
	for(var i=0;i<10;i++){
		var multiple=numero*i
		cadena+=multiple+" "
	}
	return "Los 10 primeros múltiplos de "+numero+" son "+cadena
}

var numero=parseInt(prompt("Ingrese el número que desea saber sus múltiplos"))
alert(multiple(numero))