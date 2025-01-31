const nombre = "Mario";
const apellido = "Marquez";

//const nomCompleto = nombre  + ' ' + apellido;
const nomCompleto = `${nombre} ${apellido}`
console.log(nomCompleto);

function getSaludo(nombre){
    return 'Hola ' + nombre;
}

console.log(`Este es un texto: ${getSaludo( nombre )}` )
