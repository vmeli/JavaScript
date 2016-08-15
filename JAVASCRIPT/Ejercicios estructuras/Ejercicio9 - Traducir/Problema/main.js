var text= ["casa","mesa","perro","gato"]
var mensaje='Seleccione la palabra a traducir \n' ;
var cantidad= text.length
var traslate=""
var condicion = true
var number 
for (var i = 0; i < cantidad; i++) {
	mensaje+=(i+1)+'. '+text[i]+'\n';
}
do{
	number=parseInt(prompt(mensaje))
	if (number > 0 && number < 5) condicion = false;
}while(condicion)
switch(number){
	case 1:
		traslate+="house"
		break
	case 2:
		traslate+="table"
		break
	case 3:
		traslate+="dog"
		break
	case 4:
		traslate+="cat"
		break
}
alert("La palabra "+text[number-1]+" traducida en inglés es "+traslate)


