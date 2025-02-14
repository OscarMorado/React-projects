import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";


describe('Pruebas en 05-funciones', () => {
    test(' getUser debe retornar un objeto ', () => {
        
        const testUser = {
            uid: 'ABC123',
            username: 'TestUser'
        };

        const user = getUser();

        expect(testUser).toEqual(user); //Funciona con objetos;
    });

    test('getUsuarioActivo debe retornar un objeto', () => {
        const name = 'Albedo';
        const usuarioActivo = getUsuarioActivo(name);

        expect(usuarioActivo).toStrictEqual({
            uid: 'ABC567',
            username: name
        });

    });
})
