var valores=[true,5,false,"hola","adios",2];
var element=valores.length
var mayor=0
var suma=0
var resta=0
var producto=1
var division=1
for(var i=0;i<element;i++){
	if(typeof valores[i]=="string"){
		var tamano=valores[i].length
		if(mayor<tamano){
			mayor=tamano
		}
	}else if(typeof valores[i]=="number"){
		var suma=suma+valores[i]
		var producto=producto*valores[i]
		var resta=valores[i]-resta
		var division=valores[i]/division
	}
}
alert("El mayor de las cadenas es "+mayor+"\n"+valores[0]+"\n"+valores[2]+"\n"+"La suma de los números es "+suma+"\n"+
		"La resta de los números es "+resta+"\n"+"El producto de los números es "+producto+"\n"+
		"La división de los números es "+division)