var numeroPersonas=parseInt(prompt("Promedio de estatura\n ¿Cuántas personas son: ?"))
var sumaEstatura=0//xq al poner dentro del for no sale?
for(var i=1;i<=numeroPersonas;i++){
	var estatura=0// es necesario poner cero?	
	do{
		var estatura=parseFloat((prompt("Introduzca la estatura de la persona"+i)))	
	}while(estatura<=0)
	
	sumaEstatura+=estatura
}
alert("El promedio es :"+parseFloat(sumaEstatura/numeroPersonas))