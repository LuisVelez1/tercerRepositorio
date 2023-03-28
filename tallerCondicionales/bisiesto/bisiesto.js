let año= parseInt(prompt("Ingrese el año"));

if((año % 4 == 0) && (año % 4 != 0 || año % 400 == 0)){
    console.log("Es un año bisiesto");
}else{
    console.log("No es un año bisiesto");
}
