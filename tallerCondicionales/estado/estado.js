var Estado="Modo";
Estado+= " Ingrese una opción   ";
Estado+= "   1. Edicion 2. Visualizacion ";



do{
var cod=0;


  cod=parseInt(prompt(Estado));
  
  switch(cod){
  
    case 1:  let ed =parseFloat(prompt("Puede editar"));
     console.log("1. Ahora esta en modo Edición",ed);
    
    break;
    case 2:console.log("2. Ahora esta en modo Visualización");
    console.log("La variable es 40");
    break;
    default:
        console.log("Ingrese una opcion valida");
   
  }
}while(cod!=1 && cod!=2); 