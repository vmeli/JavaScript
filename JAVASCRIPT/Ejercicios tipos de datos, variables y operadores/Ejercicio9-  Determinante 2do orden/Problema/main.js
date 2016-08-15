var array2x2=[[3 , 4],[2 , 5]]
function determinante(array2x2){
	return array2x2[0][0]*array2x2[1][1]-array2x2[0][1]*array2x2[1][0]
}
alert("La determinante de la matriz es "+determinante(array2x2))