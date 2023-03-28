console.log("ingrese su edad");

let edad=parseInt(prompt());

//si se considera solo un camino el condicional es sencillo.
if (edad>=18){
    console.log("usted es mayor de edad");
}else{
    //si usamos el else el condicional se combierte en una condicion doble
    //else se ejecuta si el if no se cumple

    console.log("usted no es mayor de edad");

}