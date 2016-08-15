var month=["enero","febrero","marzo","abril","mayo","junio","julio","agosto","setiembre","octubre","noviembre","diciembre"]
var ahorro=0
var array=[]
for(var i=0;i<12;i++){
	var dinero=parseFloat(prompt("Cuánto depositará en el mes"+" de "+month[i]))
	array.push(dinero)
	ahorro+=dinero
}
alert("Ahorro en el año un total de "+ahorro+" soles ")

var mes=prompt("Ingrese el mes del saldo a conocer")
var indice = null;

for(var j=0;j<12;j++) {
	if(month[j] === mes.toLowerCase()){
		indice=j
		break
	}	
}

if (indice != null) {
	alert("El monto depositado es "+array[indice])
}

