var number_alumnos=400;

if(number_alumnos<30){
	console.log("el costo por cada alumnmo es $4000.00");
	console.log(number_alumnos*4000);
}else if(30<=number_alumnos && number_alumnos<=49){
	console.log("el costo por cada alumnmo es $95.00");
	console.log(number_alumnos*95);
}else if(50<=number_alumnos && number_alumnos<=99){
	console.log("el costo por cada alumnmo es $70.00");
	console.log(number_alumnos*70);
}else{
	console.log("el costo por cada alumnmo es $65.00");
	console.log(number_alumnos*65);
}