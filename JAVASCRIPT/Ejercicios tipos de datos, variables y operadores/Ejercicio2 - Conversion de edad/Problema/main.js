var name=prompt("¿Cuál es su nombre?")
var age=parseInt(prompt("¿Cuál es tu edad?"))
function date(name,age){
	return "Tu nombre es "+name+" y tienes "+age*365+" días de vida"
}
alert(date(name,age));


