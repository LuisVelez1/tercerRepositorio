let num = parseFloat(prompt("Ingrese los centimetros a convertir"))
let med = prompt("lo desea convertir a metros, pulgadas, kilometros o milimetros");

switch (med) {
    case "metros":
        let met=num/100;
        console.log(num + " centimetros son ", met, " metros");
        break;
    case "kilometros":
        let km=num/100000010;
        console.log(num + " centimetros son ", km, " kilometros");
        break;
    case "milimetros":
        let mm=num10;
        console.log(num + " centimetros son ", mm, " milimetros");
        break;
    case "pulgadas":
        let pulg=num/2.54;
        console.log(num + " centimetros son ", pulg, " pulgadas");
        break;
        case "decimetros":
        let dm=num/10;
        console.log(num + " centimetros son ", dm, " decimetros");
        break;
    default:
        console.log("ingrese una logitud valida")
        break;
}