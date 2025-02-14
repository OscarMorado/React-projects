import {getAllByAltText, getAllByText, render} from '@testing-library/react';
import { FirstApp } from '../../src/FirstApp';

describe('Pruebas en FirstApp', () => {
    // test('Debe hacer match con el snapshot ', () => {

    //     const title = 'Test title';
    //     const {container} = render(<FirstApp title ={title}/>);

    //      expect(container).toMatchSnapshot();
    // })
    
    test('Debe mostrar el titulo en un h1', () => {

        const title = 'A title';
        const{container, getByText, getByTestId} = render(<FirstApp title = {title}/ >);

        {/* const h1 = container.querySelector('h1');
        console.log(h1.innerHTML); */}

        expect(getByTestId('test-title').innerHTML).toContain(title);
    });

    test('Debe mostrar el titulo en un h1', () => {

        const title = 'A title';
        const subtitle = 'A subtitle';
        const{getAllByText} = render(<FirstApp title = {title} subtitle={subtitle}/ >);

        expect(getAllByText(subtitle).length).toBe(1);
    });
})
