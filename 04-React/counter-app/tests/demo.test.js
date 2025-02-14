
describe('Test for DemoComponent', () => {
  
})


test('Test must not fail', () => {
    //Inicialización
    const message1 = 'Hi, World';

    //Estímulo
    const message2 = message1.trim();

    //Observar el comportamiento esperado
    expect(message1).toBe(message2);
    
})