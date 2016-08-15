var numeros=[]
var suma=0
var totalNumeros=parseInt(prompt("Total de números a ingresar"))
for(var i=1;i<=totalNumeros;i++){
	numero=parseFloat(prompt("Ingrese el número "+1))
	numeros.push(numero)
	suma+=numero
}
alert("Los números son "+"[ "+numeros+" ]"+"\n"+"La suma total de estos números es "+suma)



