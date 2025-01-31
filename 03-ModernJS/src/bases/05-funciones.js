// function saludar(nombre){        //Declarar funciones como el ejemplo de abajo
//     return `Hola, ${nombre}`;
// }

const saludar = function(nombre){
    return `Hola, ${nombre}`;
}

const saludar2 = (nombre) => { //Un solo return se puede simplificar de la siguiente manera
    return `Hola, ${nombre}`;
}

const saludar3 = (nombre) => `Hola, ${nombre}`;
const saludar4 = () => `Hola, señores`;

console.log(saludar('Padrino'));
console.log(saludar2('Padrinos'));
console.log(saludar3('Adios'));
console.log(saludar4());


const getUsuario = () => ({ //Los paréntesis ayudan a que JS detecte la salida como un objeto, caso contrario no detecta el cuerpo
    uid: '1234BD1L',
    usuario: 'BNBSO3',
});

const user = getUsuario();
console.log(user);


/*
    1. Transformar a función de flecha
    2. Retornar un objeto implícito
    3. Prueba


    function getUsuarioActivo(nombre){
        return{
            uid: '123',
            usuario: nombre,
        }
    };
*/

const getUsuarioActivo = (nombre) => ({uid: '123', usuario: nombre});

const usuarioActivo = getUsuarioActivo('Roberto');
console.log(usuarioActivo);