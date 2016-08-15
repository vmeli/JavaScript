var radius=parseInt(prompt("Cuál es radio del círculo"))
function areaCirculo(radius){
	return radius*radius*Math.PI
}
alert("La área del círculo de radio "+radius+" es "+areaCirculo(radius))