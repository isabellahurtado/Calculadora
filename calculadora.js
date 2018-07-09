var operacionDeseada = prompt('1: Volumen de un cilindro 2: Pasar de onzas a toneladas 3: Factorizacion de un numero'); //gragarlo a funciones//

function volumenCilindro () {
  var radio = prompt ("Ingresa el radio");
  var altura = prompt ("Ingresa la altura");
  var volumenCilindro = (Math.PI * Math.pow (radio,2) * altura);
  
  alert ("El volumen del cilindro es " + volumenCilindro);
  console.log ("El volumen del cilindro es " + volumenCilindro);
}

function onzasToneladas () {
	var onzas = prompt ("Ingresa las onzas");
    var toneladas =  (onzas *1 / 35.275 * 1 / 1000); 
    
    alert ("las toneladas " + toneladas);
    console.log ("las toneladas son" + toneladas);
}
 
function factorizacion () {
	var numeroParafactorizar = prompt ("ingresa numero");
	var resultado = (numeroParafactorizar % resultado == 0);//agregar la formula de factorizacion
	
	alert ("Resultado fatorizado  "+ resultado);
	console.log ("Resultado fatorizado  "+ resultado);
}

 
 if (operacionDeseada === "1") {
 	volumenCilindro();
 }
 else if (operacionDeseada === "2") {
 	onzasToneladas();
 }

 else if  (operacionDeseada === "3") {
 	factorizacion();
 }