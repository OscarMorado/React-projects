const persona = {
    nombre: 'Pork',
    apellido: 'Cupine',
    edad: 45,
    direccion: {
        ciudad: 'Gotham',
        zip: 32432342,
        lat: 12.312,
        lng: 45.342,
    }
};

console.log(persona);

const persona2 = { ...persona}
persona2.nombre = 'Park';

console.log(persona2);