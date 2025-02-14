import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe('Pruebas en 02-template-str', () => {
  test('getSaludo debe retornar "Hola Bruce"', () => {

   const name = 'Bruce';
   const message = getSaludo(name);

   expect(message).toBe(`Hola ${name}`)
  });
})