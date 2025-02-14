import { getLiderByGroup, getLiderById } from "../../src/base-pruebas/08-imp-exp";

describe('Pruebas en 08-deses-arr', () => {
    // test('getLiderById debe retornar una lider por ID', () => {
    //     const id = 1;
    //     const lider = getLiderById(id);
        

    //     expect(lider).toEqual({id: 1, name: 'Honoka', group: 'Muse'});
    // });

    // test('getHeroebById debe retornar undefined si no existe', () => {
    //     const id = 100;
    //     const lider = getLiderById(id);
        

    //     expect(lider).toBeFalsy();
    // });

    test('getGroupById debe retornar una lider por grupo', () => {
        const grupo = 'Aqours';
        const lider = getLiderByGroup(grupo);
        
        expect(lider.length).toBe(1);
        expect(lider).toEqual([{id: 2, name: 'Chika', group: 'Aqours'}]);
    });
})

