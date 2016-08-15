var i=0
var j=0
var k=0
var l=0
do{
	var dni=parseInt(prompt("Introducir el número de DNI"))
	var cifras=dni.toString().length
	if(cifras==12){
		var sexo=prompt("Ingresar el sexo")
		if(sexo.toUpperCase()==="FEMENINO"){
			i+=1
		}else if(sexo.toUpperCase()==="MASCULINO"){
			j+=1
		}
		var edad=parseInt(prompt("Ingresa la edad "))
		if(16<edad && edad<65){
			if(sexo.toUpperCase()==="MASCULINO"){
				k+=1
			}
		}
		l+=1
	}
}while(dni>0)
alert("El total de varones es "+j+"\n"+"El total de varones entre 16 y 65 años "+k+"\n"+
	  "El total de mujeres es "+i+"\n"+"El total de personas encuestadas son "+l)