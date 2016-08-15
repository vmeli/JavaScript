// validar el número telefónico REVISAR LA CONVALIDACIÓN
var personas = []
var contact=parseInt(prompt("cuantas personas va registrar"))
var j=0
var p=0
for(var i=0;i<contact;i++){
	var persona = {};
	persona.nombre=prompt("Ingrese el nombre de persona"+(i+1))
	persona.numero=parseInt(prompt("Ingrese el número celular"+(i+1)))
	personas.push(persona)
	j+=1
}

var numero=parseInt(prompt("Ingrese el numero telefonico"))
for(var k=0;k<j;k++){
	if(personas[k].numero==numero){
		alert("El numero telefónico "+numero+"corresponde a "+personas[k].nombre)
	}else{
		p+=1
	}
}

if(p==j){
	alert("El número no está registrado")
}