let figura = prompt("Ingrese una figura geometrica");
let base =parseFloat(prompt("Ingrese la base"));
let altura =parseFloat(prompt("Ingrese la altura"));
switch(figura){
    case"triangulo":
    let areaTriangulo = base*altura/2
    console.log("Area del triangulo es :", areaTriangulo);
    break;
    case "rectangulo":
        let areaRectangulo = base*altura
        console.log("Area del rectagulo es :",areaRectangulo);
        break;
        default:
            console.log("Ingrese una figura valida");
            break;
}