var suma=0
var cadena=""
var j=0
do{
	var numberCuenta=parseInt(prompt("Ingrese el número de cuenta"))
	var cantidad=numberCuenta.toString().length
	if(cantidad==12){
	var nombre=prompt("Ingrese el nombre del cliente")
	var saldo=parseInt(prompt("Ingrese el saldo del cliente"))
		if(saldo>0){
			alert("Su estado de cuenta es acreedor")
			suma+=saldo
		}else if(saldo<0){
			alert("Su estado de cuenta es deudor")
		}else{
			alert("Su estado de cuenta es nulo")
		}
	j+=1
	cadena+="Cliente "+j+"\n"+"No de cuenta: "+numberCuenta+" -- Nombre: "+nombre+" -- Saldo: "+saldo+"\n"
	}else{
		alert("Recuerde que su número de cuenta consta de 12 dígitos y no deber ser negativo")
	}
}while(numberCuenta>0)
alert("Los clientes"+"\n"+cadena+"\n"+"El saldo total de los acreedores "+suma )