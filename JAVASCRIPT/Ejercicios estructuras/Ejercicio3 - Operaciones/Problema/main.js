var number1=parseInt(prompt("Ingresar el numero1"))
do{
var number2=parseInt(prompt("Ingresar el numero2"))
}while(number2==0)
if(number1>number2){
	alert("La suma es "+(number1+number2)+"\n"+"La resta es "+(number1-number2))
}else if(number1===number2){
	alert("los dos números son iguales")
}else{
	alert("El producto es "+(number1*number2)+"\n"+"El división es "+(number1/number2).toFixed(3))
}