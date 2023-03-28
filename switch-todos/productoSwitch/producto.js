let precio = parseFloat(prompt("Ingrese el precio del producto"));
let porcentaje =parseFloat(prompt("Ingrese el porcentaje de descuento al producto"));

switch(true){
    case(porcentaje >= 0 && porcentaje <= 100):
    let descuento = precio * (porcentaje/100);
    let precioFinal= precio - descuento;
    console.log("el precio final con el descuento aplicado es de", precioFinal);
    break;
    default:
    console.log("Ingrese un porcentaje entre 0 y 100");

}