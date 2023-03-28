let precio = parseFloat(prompt("Ingrese el precio del producto"));
let porcentaje =parseFloat(prompt("Ingrese el porcentaje de descuento al producto"));
if (porcetanje >= 0  && porcentaje <= 100){
    let descuento =  precio * (porcentaje /100);
    let precioF = precio - descuento;
    console.log("El precio final con el descuento aplicado", precioF);
}
else{
    console.log("Ingrese un porcentaje entre 0 y 100");
}
