var persona={
	peso:null,
	altura:null,
	imc:function(){
		var result=(this.peso/Math.pow(this.altura,2)).toFixed(3)
		if(result<18){
			return "el IMC="+result+" equivale a bajo"
		}else if(18<=result && result<25){
			return "el IMC="+result+" equivale a normal"
		}else if(25<=result && result<27){
			return "el IMC="+result+" equivale a sobrepeso"
		}else{
			return "el IMC="+result+" equivale a obesidad"
		}
    }
}

persona.peso=parseFloat(prompt("Ingrese el peso"))
persona.altura=parseFloat(prompt("Ingrese la altura"))

alert("La masa corporal con peso "+persona.peso+" kg y altura "+persona.altura+" m \n"+persona.imc())