let nombre = prompt("Ingrese su nombre");
let subsidio = parseInt(prompt("Ingrese su estrato socio-economico "));
let años = parseInt(prompt("Ingrese los años que lleva en la empresa"));

if(subsidio < 4 && años >=8){
    console.log(nombre + " tiene derecho a subsidio");
}else{
    console.log(nombre + " no tiene derecho a subsidio");
}

