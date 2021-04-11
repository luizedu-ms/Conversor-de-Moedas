function converter(){
 var valorDolar = document.getElementById("valorDolar").value;
 var valorDolarDeci = parseFloat(valorDolar);
 var valorTaxa = document.getElementById("taxaConversao").value;
 var valorTaxaDeci = parseFloat(valorTaxa);
 
 if(valorDolar == "" || valorTaxa == ""){
   alert("Digite valores validos!");
 } else{
       var valorConvertivo = valorDolarDeci * valorTaxaDeci;   
       var valorConvertivoDecimal = valorConvertivo.toFixed(2);
       document.getElementById("resultado").innerHTML = "R$" + valorConvertivoDecimal; 
 }

}