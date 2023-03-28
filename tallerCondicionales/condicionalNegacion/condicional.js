//Saber si un triangulo es congruente con otro.

let angulo1 = parseFloat(prompt("Ingrese un angulo del triangulo 1"));
let angulo2 = parseFloat(prompt("Ingrese un angulo del triangulo 1"));
let angulo3 = parseFloat(prompt("Ingrese un angulo del triangulo 1"));

let angulo4 = parseFloat(prompt("Ingrese un angulo del triangulo 2"));
let angulo5 = parseFloat(prompt("Ingrese un angulo del triangulo 2"));
let angulo6 = parseFloat(prompt("Ingrese un angulo del triangulo 2"));

let suma1= angulo1 + angulo2 + angulo3 == 180;
let suma2= angulo4 + angulo5 + angulo6 == 180;

 if(suma1 == true && suma2 == true){
    if(angulo1 != angulo4 || angulo2 != angulo5 || angulo3 != angulo6){
        console.log("No es congruente :( ");
     }else if(angulo1 == angulo4 && angulo2 == angulo5 && angulo3 == angulo6){
        console.log("Si es un triangulo congruente");
        }  
     
 }else{
     console.log("Esos datos no son de un triangulo :( ");
 }
    

   




