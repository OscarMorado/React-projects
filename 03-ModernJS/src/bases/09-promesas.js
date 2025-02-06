import {getLiderById} from './bases/08-imp-exp' 


// const promesa = new Promise((resolve, reject) => { // Los argumentos pueden tomar cualquier nombre, pero se usa resolve y reject como convención
//     setTimeout(() => {

//         const lider = getLiderById(5);
//         resolve(lider); //Llama al then
//         reject('No existe esa lider');
//     }, 2000)
// }); //Son asínscronas


// promesa.then((lider) => {
//     console.log('Despues de dos segundos')
//     console.log('Se muestra el lider: ', lider)
// })
// .catch(err => console.warn(err));


const getHeroeByIdAsync = (id) => {
    return new Promise((resolve, reject) => { 
        setTimeout(() => {
    
            const lider = getLiderById(id);
            if(lider){
                resolve(lider);
            }else{
                reject('No existe esa lider');
            }           
        }, 2000)
    }); 
}

// getHeroeByIdAsync(5)
//     .then(lider => console.log('La lider es: ', lider))
//     .catch(err => console.warn(err));

//Simplificado
getHeroeByIdAsync(5)
    .then(lider => console.log('La lider es: ', lider))
    .catch(console.warn);