var operacion = prompt('1: Volumen de un cilindro 2: Pasar de onzas a toneladas 3: Factorizacion de un numero'); //gragarlo a funciones//

if ( operacion === "1") {
  var radio = prompt ("Ingresa el radio");
  var altura = prompt ("Ingresa la altura");
  var volumenCilindro = (Math.PI * Math.pow (radio,2) * altura);
  alert ("El volumen del cilindro es " + volumenCilindro);

  console.log ("El volumen del cilindro es " + volumenCilindro);
}

if (operacion === "2") {
	var onzas = prompt ("Ingresa las onzas");
    var toneladas =  (Math.toneladas *(onzas)); //agregar la formula bien de onzas a toneladas//
    alert ("las toneladas " + toneladas);

    console.log ("las toneladas son" + toneladas);

}
 
if (operacion ==="3") {
	var numeroParafactorizar = prompt ("ingresa numero");
	var resultado = (numeroParafactorizar % resultado == 0);//agregar la formula de factorizacion//

	alert ("Resultado fatorizado  "+ resultado);
	console.log ("Resultado fatorizado  "+ resultado);

}