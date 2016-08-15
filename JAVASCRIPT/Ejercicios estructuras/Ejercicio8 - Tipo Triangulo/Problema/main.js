var a=parseInt(prompt("Ingrese el 1er lado del triángulo a conocer"))
var b=parseInt(prompt("Ingrese el 1do lado del triángulo a conocer"))
var c=parseFloat(prompt("Ingrese el 1cer lado del triángulo a conocer"))

if(a>0 && b>0 && c>0){

	if(a<(b+c) && b<(a+c) && c<(a+b)){

		if(a==b && b==c){
			alert("El triángulo es equilátero")
		}else if(a==c||a==b||c==b){
			alert("El triángulo es isósceles")
		}else if(a*a==b*b+c*c || b*b==a*a+c*c || c*c==b*b+a*a){

			if(a==b || b==c || a==c){
				alert("El triángulo es rectángulo e isósceles")
			}else{
				alert("El triángulo es rectángulo y escaleno")
			}

		}else{
			alert("El triángulo es escaleno")
		}

	}else{
		alert("El triángulo no existe")
	}

}else{
	alert("Recuerde que los lados del triángulo son positivos")
}






// mejorando versión 1

// if(a<(b+c) && b<(a+c) && c<(a+b)){
// 	if(a==b && b==c && a==c ){
// 		alert("El triángulo es equilátero")
// 	}else if(a*a==b*b+c*c || b*b==a*a+c*c || c*c==b*b+a*a){
// 		if(a==b || b==c || a==c){
// 			alert("El triángulo es rectángulo e isósceles")
// 		}else{
// 			alert("El triángulo es rectángulo y escaleno")
// 		}
// 	}else if(a!=b && a!=c && b!=c){
// 		alert("El triángulo es escaleno")
// 	}else{
// 		alert("El triángulo es isósceles")
// 	}

// }else{
// 	alert("El triángulo no existe")
// }



// versión 1
// if(a==b && b==c){
// 	alert("El triángulo es equilátero")
// }else if(a*a==b*b+c*c || b*b==a*a+c*c || c*c==b*b+a*a){
// 	alert("El triángulo es réctangulo")
// }else if(a!=b && b!=c && c!=a){
// 	alert("El triángulo es escaleno")
// }else{
// 	alert("El triángulo es isósceles")
// }

