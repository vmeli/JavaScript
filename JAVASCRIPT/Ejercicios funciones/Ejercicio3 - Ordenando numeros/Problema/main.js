// var array=[]

// for(var i=0;i<3;i++){
//    array.push(parseInt(prompt("Ingrese el número "+(i+1))))
// }

// function ordenar(array){
// 	return array.sort(function(a, b){return a-b})

// }

// alert("Ordenando el "+array+" resulta "+ordenar(array))

// ======================

var array=[]

for(var i=0;i<3;i++){
   array.push(parseInt(prompt("Ingrese el número "+(i+1))))
}

for(var j=1;j<=3;j++){
	if((array[j-1]-array[j])>0){
		var temp=array[j]
		array[j]=array[j-1]
		array[j-1]=temp
	}
}
alert(array)





























// de mayor a menor
// for(var j=1;j<=3;j++){
// 	if((array[j-1]-array[j])<0){
// 		var temp=array[j-1]
// 		array[j-1]=array[j]
// 		array[j]=temp
// 	}
// }
