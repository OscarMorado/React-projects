import { getLiderById } from "./08-imp-exp";

export const getLiderByIdAsync = (id) => {
    return new Promise((resolve, reject) => { 
        setTimeout(() => {
    
            const lider = getLiderById(id);
            if(lider){
                resolve(lider);
            }else{
                reject('No existe la lider ' + id);
            }           
        }, 1000)
    }); 
}