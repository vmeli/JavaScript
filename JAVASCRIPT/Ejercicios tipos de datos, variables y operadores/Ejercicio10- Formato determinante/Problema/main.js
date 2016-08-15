var orden=parseInt(prompt("Introduzca el orden de la matriz"))
var array=[] 
var resultado=""
for(var i=0;i<orden;i++){
	var arrayfila=[]
	for(var j=0;j<orden;j++){
		var a=parseInt(prompt("Introduce elemento a"+(i+1)+(j+1)))
		arrayfila.push(a)
		resultado+=a+" "
	}
	array.push(arrayfila)
	resultado+="\n"	    
}
console.log(array)
alert(resultado)