var a=parseInt(prompt("Ingrese 1er número"))
var b=parseInt(prompt("Ingrese 2do número"))
var c=parseInt(prompt("Ingrese 3cer número"))

function menor(a,b,c){
	if(a<=b && b<=c){
		return a
	}else if(b<=a && b<=c){
		return b
	}else{
		return c
	}
}
alert("El menor entre los números "+a+" , "+b+" y "+c+" es "+menor(a,b,c))

