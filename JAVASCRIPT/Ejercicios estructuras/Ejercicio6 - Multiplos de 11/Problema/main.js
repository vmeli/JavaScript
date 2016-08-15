// var multiple=11
// for(var i=0;i<3000;i++){
// 	if(i%multiple==0){
// 		console.log("Los múltiplos de 11 son "+i)
// 	}
// }


var multiple=11
var suma=0
for(var i=0;i<3000;i++){
	if(i%multiple==0){
		console.log("Los múltiplos de 11 son "+i)
		suma+=i
	}
}
alert("La suma de los múltiplos de 11 es "+suma)