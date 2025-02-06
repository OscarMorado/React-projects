const activo = true

// let mensaje = '';

// if(activo){
//     mensaje = 'Activo';
// }else{
//     mensaje = 'Inactivo';
// }

const mensaje = (activo) ? 'Activo' : 'Inactivo'; //Operador ternario
const mensaje2 = activo && 'Activo';  //Forma corta de hacer un If simple

console.log(mensaje);