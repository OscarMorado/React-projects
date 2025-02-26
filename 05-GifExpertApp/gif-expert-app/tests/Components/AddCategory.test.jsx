import {fireEvent, render, screen} from '@testing-library/react';
import { AddCategory } from "../../src/Components/AddCategory";

describe('Pruebas en AddCategory', () => {

    test('Debe cambiar el valor de la caja de texto ', () => {

        render(<AddCategory onNewCategory={() => {}}/>); //Creamos el sujeto de pruebas y extraemos el input
        const input = screen.getByRole('textbox');

        fireEvent.input(input, {target: {value: 'Honoka'}}); //Disparamos el evento y cercioramos que el valor sea válido

        expect(input.value).toBe('Honoka');
        screen.debug();
    });

    test('Debe llamar onNewCategory si el input tiene un valor ', () => {
        const inputValue = 'Honoka Kousaka';
        const onNewCategory = jest.fn(); //Simulación de una función

        render(<AddCategory onNewCategory={onNewCategory}/>);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, {target: {value:inputValue}});
        fireEvent.submit(form);
        //screen.debug();

        expect(input.value).toBe(''); //Revisa que el valor de la caja de texto sea '' después del submit
        expect(onNewCategory).toHaveBeenCalled();
        //expect(onNewCategory).toHaveBeenCalledTimes(3);  //Se espera que se llame 3 veces
        expect(onNewCategory).toHaveBeenCalledWith(inputValue); //Evalúa que se llame a ala función con el valor de la caja de texto
    })

    test('No debe llamar el onNewCategory si el input es inválido', () => {

        const inputValue = 'Not a LL character';
        const onNewCategory = jest.fn(); //Simulación de una función

        render(<AddCategory onNewCategory={onNewCategory}/>);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        const errorMessage = screen.getByTestId('error');

        fireEvent.submit(form); //Lanza el submit con el valor por defecto para luego cargar el textbox con el input de prueba
        fireEvent.input(input, {target: {value:inputValue}});
        fireEvent.submit(form);
        fireEvent.submit(form);

        expect(errorMessage.textContent).toBe('Ingresa el nombre de una idol de Love Live!');
        expect(onNewCategory).toHaveBeenCalledTimes(1); //Solo debe llamar una vez a la función para realizar la validación del input
    })



});
