function calcula(){
    var peso = document.getElementById('campo-1');
    var altura = document.getElementById('campo-2');
    var imc = peso.value/(altura.value*altura.value);
    if(imc < 18.5){
        alert("ABAIXO DO PESO");
    }else if((imc >= 18.6) & (imc <= 24.9)){
        alert("PESO IDEAL(PARABÉNS)");
    }else if((imc >= 25.0 ) & (imc <= 29.9)){
        alert("LEVEMENTE ACIMA DO PESO");
    }else if((imc >= 30.0) & (imc <= 34.9)){
        alert("OBESIDADE GRAU I");
    }else if((imc >= 35.0) & (imc <= 39.9)){
        alert("OBESIDADE GARU II(SEVERA)");
    }else if(imc > 40){
        alert("OBESIDADE III(MÓRBIDA)");
    }
}