//import {lideres} from '../bases/data/Lideres' //Imp + Tab completa esta línea, solo será necesario sobreescribir los valores
import  {lideres}  from "../bases/data/Lideres"; //Se puede importar escribiendo el nombre del objeto a importar + Tab (Si no aparece, abrir y cerrar el archivo a importar puede ayudar)
//import lideres, {gens} from './bases/data/Lideres'; // Export por default, export individual

// const getLiderById = (id) => {
//     return lideres.find((lider) => lider.id === id);
// }

export const getLiderById = (id) => lideres.find((lider) => lider.id === id); //El return no es necesario
//console.log(getLiderById(5));


export const getLiderByGroup = (group) => lideres.filter((lider) => lider.group === group); 
//console.log(getLiderByGroup('Aqours'));