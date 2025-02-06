const personajes = ['Honoka', 'Chika', 'Ayumu', 'Kanon', 'Kaho'];

const [,,, pj] = personajes;

console.log(pj);


const retornaArreglo = () => {
    return ['ABC', 123];
}

const [letras, numeros] = retornaArreglo(); //Ayuda a devolver los valores del arreglo por variables independientes (no tiene que ver el tipo)
console.log(letras, numeros);



//Ejercicio
//1. El primer valor del arr se llamará nombre
//2. El segundo valor se llamará setNombre
const useState = (valor) => {
    return [valor, () => {console.log('Asia Live Tour 2025')}];
}

const [nombre, setNombre] = useState('Long live to the Asia Live Tour 2025');

console.log(nombre);
setNombre();