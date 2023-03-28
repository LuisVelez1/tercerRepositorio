let nume = parseInt(prompt("Ingrese un numero"));

switch (nume){
    case 1:
    case 4:
    case 6:
    case 8:
    case 9:
    case 12:
    case 14:
    case 15: 
    console.log (nume + " No es numero primo");
    break;
    
    default:
    case 2:
    case 3:
    case 5:
    case 7:
    case 11:
    case 13:
        console.log(nume + " Es numero primo");
        break;


}