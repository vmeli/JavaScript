var letras=['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E','T']
var numberDni=parseInt(prompt("Ingrese los 8 números de su DNI"))
var letter=(prompt("Ingres la letra que corresponde a su DNI")).toUpperCase()
if(0<numberDni && numberDni<=99999999){
	var letraDni=letras[numberDni%23]
	if(letter==letraDni){
		alert("El número y la letra de DNI son correctos")
	}else{
		alert("El DNI "+numberDni+" le corresponde la letra "+letraDni+" y no la letra "+letter)
	}

}else{
	alert("El número proporcionado no es válido")
}