//const arreglo = new Array(); //Se puede, pero si acaso se debe usar para arreglos de tamaño fijo
const arreglo = [1, 2, 3, 4]
//arreglo.push(1); //No usar el push, modifica el arreglo principal

let arreglo2 = [...arreglo, 5];
//arreglo2.push(5);

const arreglo3 = arreglo2.map(function(numero){ //map() crea un arreglo nuevo
    return numero * 2;
});




console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);