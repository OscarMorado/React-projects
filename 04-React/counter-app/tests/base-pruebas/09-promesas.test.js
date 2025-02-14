import { getLiderByIdAsync } from "../../src/base-pruebas/09-promesas";

describe('Pruebas en 09-promesas', () => {
    test('getLiderByIdAsync debe retornar una lider', (done) => {
        const id = 100;
        getLiderByIdAsync(id)
        .then(lider => {

            expect(lider).toBeFalsy();
            done();
        })
        .catch(error => {
            expect(error).toBe(`No existe la lider ${id}`);
            done();
        })        
    });
})
