var texto=prompt("Ingrese el texto").toLowerCase()
var array=texto.split(" ").join("").split("")
var longitud=array.length

function palindromo(array){

 	for(var i=0;i<longitud;i++){
		if(array[i]==array[longitud-1-i]){
			return "es palindromo"
		}else{
			return "no es palindromo"
		}
	}	
}

alert("El texto "+"\""+texto+"\""+" "+palindromo(array))