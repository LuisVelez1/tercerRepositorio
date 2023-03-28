let e1 = parseFloat(prompt("Ingrese uno de los angulos"));
let e2 = parseFloat(prompt("Ingrese uno de los angulos"));
let e3 = parseFloat(prompt("Ingrese uno de los angulos"));

let suma= e1 + e2 + e3;
switch ( suma ){
    case 180:
    console.log("Los angulos si corresponden a un triangulo");
    break;

    default:
    console.log("Los angulos no corresponden a un triangulo");
    break;
}