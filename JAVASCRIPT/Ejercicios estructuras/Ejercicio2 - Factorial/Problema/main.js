var n=parseInt(prompt("Ingrese el número del factorial a conocer"))
var factorial=1
var cadena=""
for(var i=n;i>0;i--){
	factorial=factorial*i
	cadena+=i+"x"
}
cadena=cadena.substring(0,cadena.length-1)//en vez de salir 3x2x1x =6 <> 3x2x1 =6
alert("El factorial de "+n+"! es "+cadena+" = "+factorial)