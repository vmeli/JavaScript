var j=0
function primo(numero){
	for(var i=1;i<=numero;i++){
		dividers=numero%i
		if(dividers==0){
			j+=1
		}
	}
	if(j==2){
		return " es primo"
	}else{
		return " no es primo"
	}

}
var numero=parseInt(prompt("Ingrese el número a evaluar"))
alert("El número "+numero+primo(numero))