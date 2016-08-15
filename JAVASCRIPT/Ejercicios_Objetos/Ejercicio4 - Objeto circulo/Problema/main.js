var circulo={
	radio:null,
	longitud:function(){ return this.radio*2*Math.PI},
	area:function(){ return Math.PI*Math.pow(this.radio,2)}
}

circulo.radio=parseInt(prompt("Ingrese el radio del círculo"))
//circulo.radio=prompt("Ingrese el radio del círculo")
alert("El círculo de radio"+circulo.radio+"\n"+"Longitud : " +circulo.longitud().toFixed(3)+"\n"+"Área : "+circulo.area().toFixed(3))


//this es para referenciar una propiedad pero debe estar en la misma clase puede ser llamado.

//versión 1
// circulo.radio=parseInt(prompt("Ingrese el radio del círculo"))

// function calculando(circulo.radio){
// 	longitud=circulo.radio*2*Math.PI
// 	area=Math.PI*Math.pow(circulo.radio,2)
// 	return "Es la longitud"+longitud+"Es la área "+area
// }

// alert(calculando(circulo.radio))

