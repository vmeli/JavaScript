function identification(texto){
	if(texto==texto.toUpperCase()){
		return "El texto está compuesto por mayúsculas"
	}else if(texto==texto.toLowerCase()){
		return "El texto está compuesto por minúsculas"
	}else{
	    return "El texto está compuesto de mayúsculas y minúsculas"
	}	
}
var texto=prompt("Ingrese el texto a identificar")
alert(identification(texto))
