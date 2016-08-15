function evaluation(a){
	if(a%2==0){
		return"El número "+a+" es par"
	}else{
		return"El número "+a+" es impar"
	}
}
var a=parseInt(prompt("Ingrese el número entero"))
alert(evaluation(a))