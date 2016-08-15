var inversion={
	valor: null,
	tasa: null,
	periodo: null	
}

var cadena=""

for(var i in inversion) { //el i viene ser los nombres de las propiedades in inversion el objeto a recorrer propiedades
	inversion[i] = prompt("Ingresa "+i);
	cadena+=".."+i+": "+inversion[i]+"\n"
}

var resultado= inversion.valor*Math.pow(1+inversion.tasa/100,inversion.periodo);

alert(cadena+"resultado: "+resultado);



// ======= versión 1 ========
// var inversion={}
// inversion.valor=parseFloat(prompt("Ingrese el valor de la inversión"))//no es necesario definir el var pues el objeto ya está definido
// inversion.tasa=parseFloat(prompt("Ingrese la tasa de la inversión"))
// inversion.periodo=parseInt(prompt("Ingrese la cantidad de meses de la inversión"))

// inversion.resultado=inversion.valor*Math.pow(1+inversion.tasa/100,inversion.periodo)

// alert("..valor: "+inversion.valor+"\n"+"..tasa : "+inversion.tasa+"\n"
// 	+"..periodo : "+inversion.periodo+"\n"+inversion.resultado)