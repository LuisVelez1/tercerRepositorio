let numero1 = parseFloat(prompt("Ingrese un numero"));

switch (numero1 % 5 ){
    case 0:
        console.log("Es un numero numero divisible por cinco");
        break;
        
        default:
            console.log("No es numero divisible por cinco");
            break;

}