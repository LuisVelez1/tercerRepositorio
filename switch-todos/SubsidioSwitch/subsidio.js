let nombre = prompt("Ingrese su nombre");
let subsidio = parseInt(prompt("Ingrese su estrato socio-economico (1 al 6)"));
let años = parseInt(prompt("Ingrese los años que lleva en la empresa"));


switch(subsidio < 4 && años >= 8){
    case true:
        console.log(nombre + " recibe subsidio de vivienda");
        break;

        default:
            console.log(nombre + " no recibe subsidio de vivienda");
            break;

}
