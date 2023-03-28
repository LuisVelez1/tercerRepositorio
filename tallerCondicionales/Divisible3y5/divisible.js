let num = parseFloat(prompt("Ingrese un numero"));

let res = (num % 5 == 0 && num % 3 == 0);

switch (res){
    case true:
        console.log("Es divisible ")
        break;
        default:
            console.log("No es divisible");
            break;
}
