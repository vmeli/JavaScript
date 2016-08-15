// a=1+1;
// console.log(a);
// function suma(a,b){
// 	return a+b;
// }
// console.log(suma(4,5));



// function suma(a,b){
// 	if (a>=0 && b>=0){
// 		return a+b;
// 	}else{
// 		return "Ahorita no joven,mande cosas positivas"
// 	}
// }

// console.log(suma(4,5));
// console.log(suma(-5,8));


// function suma(a,b){
// 	return a>=0 && b>=0? a+b:"Ahorita no joven,mande cosas positivas";
// }

// function suma2(a,b){
// 	if(a>=0 && b>=0){
// 		return a+b;
// 	}else{
// 		return "Ahorita no joven, mande cosas positivas";
// 	}
// }

// console.log(suma(4,5));
// console.log(suma2(-5,8));

// if else if

// var menu = 1;//asignación
// var seccion = "1";
// if menu == 1 //comparación
var menu=2;

if(menu ===1){
	console.log("Entre al menu 1");
}else if(menu===2){
	console.log("Entre al menu 2");
}

switch(menu){
	case 1:
		console.log("Entre al menú 1");
		break;
	case 2:
		console.log("Entre al menú 2")
		break;	
}