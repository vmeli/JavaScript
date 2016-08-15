var nombres=["André","Julia","Ana","Francisco"]//name=[] no lo reconoce xq?
var list=nombres.length
var listname="Cúantos nombres desea agregar a la lista \n"
var newlistname="La nueva lista es \n"
// var condicion=true

for(var i=0;i<list;i++){
	listname+=(i+1)+". "+nombres[i]+"\n"
}

var number=parseInt(prompt(listname))

for (var j=1; j<=number;j++){
	var newnombres=prompt("Ingrese el nombre "+j)
	nombres.push(newnombres)
}

for(var k=0;k<(list+number);k++){
	newlistname+=(k+1)+". "+nombres[k]+"\n"
}
alert(newlistname)

