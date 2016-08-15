var gasolinera={
				totalGasolina:100,
				gasolinaBought:null,
				precio:null,
				costoLitro:10,
				sobraGasolina:function(){
					this.totalGasolina	=this.totalGasolina-this.gasolinaBought
				},
				pagoTotal:function(){ this.precio=(this.costoLitro*this.gasolinaBought).toFixed(2)}
}

do{

	gasolinera.gasolinaBought=parseInt(prompt("DISPENSADOR DE GASOLINA"+"\n\n"+
											   "Total de gasolina: "+gasolinera.totalGasolina+" litros"+"\n"+
		                                       "Costo por litro: "+gasolinera.costoLitro+" soles"+"\n"+
		                                       "Cuántos litros de gasolina va comprar?"))
	gasolinera.sobraGasolina()
	gasolinera.pagoTotal()

	if(gasolinera.totalGasolina==0){
		alert("Su pedido acabo todo el stock de gasolina")
		break
	}else if(gasolinera.totalGasolina<0){
		alert("Solo disponemos "+Math.abs(gasolinera.totalGasolina)+" litros de gasolina para su pedido de "+gasolinera.gasolinaBought+" litros")
		break
	}

	alert("Gasolina comprada: "+gasolinera.gasolinaBought+" litros"+"\n"+"Precio: "+gasolinera.precio+" soles"+"\n"+"Queda en el dispensador: "+gasolinera.totalGasolina+" litros")

}while(gasolinera.totalGasolina>0)


