function cuadradoSuma(a,b){
	return Math.pow(a+b,2)
}
a=parseInt(prompt("Ingrese el 1er número"))
b=parseInt(prompt("Ingrese el 2do número"))
alert("El cuadrado de la suma del número "+a+" y "+b+" es "+cuadradoSuma(a,b))