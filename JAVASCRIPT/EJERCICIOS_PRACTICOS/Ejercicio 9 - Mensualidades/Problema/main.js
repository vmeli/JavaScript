var condicion=true
do{
var mes=parseInt(prompt("Ingrese el número del mes que desea cancelar"))
condicion=isNaN(mes)
}while(condicion)

var total=0
function meses(mes){
	return 5*Math.pow(2, mes)
}
for(var i=1;i<=mes;i++) {
	total+=meses(i)	
}

alert("El monto a pagar del mes "+mes+" es "+meses(mes)+"\n"+
		"El monto total a pagar hasta el mes es "+total)

