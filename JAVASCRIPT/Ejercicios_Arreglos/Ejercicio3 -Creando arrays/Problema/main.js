var meses=[]
var textmes="Los meses del año son \n"
for(var i=0;i<12;i++){
	var mes=prompt("Ingrese los 12 meses \nIngrese el mes "+(i+1))
	meses.push(mes)
	alert(mes)
}
for(var j=0;j<12;j++){
	textmes+=(j+1)+". "+meses[j]+"\n"
}

alert(textmes)
