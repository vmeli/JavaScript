var numero=10;
function cubo(numero){
	return numero*numero*numero;
}
function cuarta(numero){
			// var numero=null;
	return numero*numero*numero*numero;
}

for(i=1;i<=numero;i++){
	console.log("El cubo del "+i+" es "+cubo(i));
	console.log("La cuarta del "+i+" es "+cuarta(i));
}
		