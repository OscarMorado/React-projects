const objeto = {
    nombre: 'Zuum',
    tipo: 'bote',
    contenido: 'alcohol etilico',
};

const {nombre, tipo, contenido} = objeto;

// console.log(nombre);
// console.log(tipo);
// console.log(contenido);

// const retornaObjeto = (obj) => {
//     console.log(obj)
// };


// const retornaObjeto = ({nombre, tipo, peso = '125'}) => { //Si el objeto ya tiene un valor para un campo que no este, se asignará dicho valor en vez del valor por defecto. Para esto, la const 'objeto' tendría que tener el campo "peso"
//     console.log(nombre, tipo, peso);
// };

const useContext = ({nombre, tipo, peso = '125'}) => { //Si el objeto ya tiene un valor para un campo que no este, se asignará dicho valor en vez del valor por defecto. Para esto, la const 'objeto' tendría que tener el campo "peso"
    return {
        marca: nombre,
        envase: tipo,
        usos:{
            limpieza: 'Limpia cosas',
            desinfeccion: 'Desinfecta cosas',
        }
    }
};

//const {marca, envase} = useContext(objeto);

const {marca, envase, usos: {limpieza, desinfeccion}} = useContext(objeto); //Retornar obj con otros dentro en sus respectivas constantes (Si se le quitan las llaves se imprimirán ambos valores)

console.log(marca, envase);
console.log(limpieza, desinfeccion);

