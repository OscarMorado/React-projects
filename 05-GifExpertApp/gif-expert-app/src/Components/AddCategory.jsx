import { useState } from "react"
import { miembros } from "../data/Members";

export const AddCategory = ({onNewCategory}) => {

    const[ inputValue, setInputValue] = useState('Honoka');
    const[ errorMessage, setErrorMessage] = useState("");

    const getMiembro = (nombre) => { //Valida que el nombre ingresado en el input coincida con uno de los nombres del archivo 'miembros'

        const nameFormat = (str) =>
            str
                .split(" ")
                .map((nombre) => nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase())
                .join(" ")

        // return Object.values(miembros[0]).some((miembro) => miembro.some((miembro) => miembro.includes(nameFormat(nombre))));  //Devuelve true si se ingresa una sola parte del nombre (nombre o apellido). Devuelve un bool, por lo que se comentó para permitir que se devuelva el miembro como tal

        for (const miembrosGrupo of Object.values(miembros[0])) {
            for (const miembro of miembrosGrupo) {
                if (miembro.includes(nameFormat(nombre))) {
                    return miembro; //Devuelve el nombre completo
                }
            }
        }

        return null;
    };

    const onInputChange = (event) => {
        setInputValue(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        
        const nombreCompleto = getMiembro(inputValue);
        if(!getMiembro(nombreCompleto)){
            setErrorMessage("Ingresa el nombre de una idol de Love Live!");
            console.log(errorMessage);
            return;
        }
        
        onNewCategory(nombreCompleto);
        setInputValue('');
        setErrorMessage("");
    }

    return (
        <form onSubmit = {onSubmit}>
            <p>{errorMessage}</p>
            <input
                type = "text"
                placeholder = "Busca otro miembro!"
                value = {inputValue}
                onChange ={onInputChange}
            />
        </form>
    )
}


/* 
    Si bien este componente solamente debería agregar el nuevo valor a la categoría, se le añadió más código para validar la entrada de dicha categoría antes de añadir el valor
    Esto se podría mover a un nuevo componente que se encargue de validar la entrada, sin embargo, se dejará así por cuestiones de tiempo 

*/