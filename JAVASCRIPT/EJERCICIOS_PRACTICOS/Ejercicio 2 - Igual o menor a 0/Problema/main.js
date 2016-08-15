var numero=parseFloat(prompt("¿Cuántos números va comparar?"))
var j=0
var k=0
for(var i=1;i<=numero;i++){
	// var valorNumero=0 no es necesario pues el valor no cambia al momento de iterar
	var valorNumero=parseFloat(prompt("Introducir el número "+i))
	if(valorNumero<=0){
		j+=1
	}else{
		k+=1
	}
}
alert("Tenemos "+j+" números menores o iguales a cero"+"\n"+"Tenemos "+k+" números mayores a cero")

