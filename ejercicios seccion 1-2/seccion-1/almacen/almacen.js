let precio= parseFloat(prompt("ingrese el precio del producto"));
let compra= prompt("ingrese el metodo de pago, (credito o efectivo)");

if (compra == "efectivo"){
    console.log("Debe pagar", precio,"pesos");

} else if (compra == "credito"){

    credito= precio * 0.25;
    Credito= precio + credito;

    let meses = parseInt(prompt("Ingrese en cuantos meses va a pagar el producto"));

    Meses= Credito/meses; 

    console.log ("Usted debe pagar",Meses, "por",meses);


}