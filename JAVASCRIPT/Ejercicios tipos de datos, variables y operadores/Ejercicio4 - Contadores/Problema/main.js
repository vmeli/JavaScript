var number = parseInt(prompt("Introduzca un número"))

function contador(number){
	number+=5
	var number1=number+21
	var number2=number1-4
	return "Número introducido: "+number+"\n"
			+"Contadores: "+'\v'+number+" "+number1+" "+number2
}
alert(contador(number))