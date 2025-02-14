import {fireEvent, render, screen} from '@testing-library/react';
import { CounterApp } from "../../src/CounterApp";



describe('Pruebas en CounterApp', () => {

    const initialValue = 10;
    test('Match con el snapshot ', () => {

        const {container} = render(<CounterApp value = {initialValue}/>);
        expect(container).toMatchSnapshot();
    })

    test('Debe mostrar el valor inicial de 10 ', () => {

        render(<CounterApp value ={initialValue}/>);
        expect(screen.getByText(initialValue)).toBeTruthy;
    })
    
    test('Debe incrementar con el botón +1 ', () => {

        render(<CounterApp value ={initialValue}/>);
        fireEvent.click(screen.getByText('+1'));
        expect(screen.getByText('11')).toBeTruthy();
    })

    test('Debe funcionar el botón reset', () => {

        render(<CounterApp value ={initialValue}/>);
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));

        fireEvent.click(screen.getByRole('button', {name: 'btn-reset'}));
        // fireEvent.click(screen.getByText('Reset'));
        expect(screen.getByText('10')).toBeTruthy();
    })
    
});