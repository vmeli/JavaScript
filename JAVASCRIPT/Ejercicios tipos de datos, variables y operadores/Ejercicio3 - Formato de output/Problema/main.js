var name=prompt("¿Cuál es tu nombre?")
var lastname=prompt("¿Cuál es tu apellido?")
var city=prompt("¿Cómo se llama tu distrito?")

function date(name,lastname,city){
	return "Hola "+name+" "+lastname+"\n"+"Adiós habitante de "+city
}
// preguntar como hacer para centrar el texto

alert("============================ \n"
	+'\b'+date(name,lastname,city)+"\n"+
	  "============================")