var n=parseInt(prompt("¿Cuántos números va ingresar?"))
var j=0
var k=0
for(var i=1;i<=n;i++){
	var number=parseInt(prompt("Ingrese el número "+i))
	if(number<=0){
		j+=1
	}else{
		k+=1
	}
}
alert("Los números iguales a cero y negativos son "+j+"\n"+
	  "Los números positivos son "+k)