var lista1=[]
var lista2=[]
var suma1=0
var suma2=0

for(var i=0;i<3;i++){
	lista1.push(parseInt(prompt("Ingrese el elemento a"+(i+1)+" de la lista1")))
	suma1+=lista1[i]
}

for (var i=0;i<3;i++) {
	lista2.push(parseInt(prompt("Ingrese el elemento a"+(i+1)+" de la lista2")))
	suma2+=lista2[i]	
}

if(suma2<suma1){
	alert("La lista1 es mayor")
}else if(suma1<suma2){
	alert("La lista2 es mayor")
}else{
	alert("Las listas son iguales")
}