var texto=prompt("Ingrese el texto que desea repetir")
var veces=prompt("Cuántas veces desea repetirlo")
var text= ""
for(var i=1;i<=veces;i++){
	text+=texto
}
alert(text)