var number_personas=400;

if(number_personas<=200){
	console.log("el costo de platillo por persona es $95.00");
	console.log(number_personas*95);
}else if(200<number_personas && number_personas<=300){
	console.log("el costo de platillo por persona es $85.00");
	console.log(number_personas*85);
}else{
	console.log("el costo de platillo por persona es $75.00");
	console.log(number_personas*75);
}