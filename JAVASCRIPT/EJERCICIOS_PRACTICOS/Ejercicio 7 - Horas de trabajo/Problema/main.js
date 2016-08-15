var semana=["lunes","martes","miercoles","jueves","viernes","sabado"]
var total=0
var pagoHora=parseInt(prompt("Ingrese el monto a pagar por hora"))
// var pagoHora=10
for(i=0;i<6;i++){
	horas=parseInt(prompt("Ingrese las horas trabajadas el día "+semana[i]))
	total+=horas
}
alert("Total de horas de la semana "+total+"\n"+
	  "El saldo de la semana son "+(total*pagoHora))