import {render, screen} from '@testing-library/react';
import { FirstApp } from '../../src/FirstApp';

describe('Pruebas en FirstApp', () => {

    const title = 'A title';
    const subtitle = 'A subtitle';

    test('Debe hacer match con el snapshot ', () => {

        const {container} = render(<FirstApp title ={title}/>);
        expect(container).toMatchSnapshot();
    })
    
    test('Debe mostrar el titulo en un h1', () => {
        render(<FirstApp title = {title} />);
        screen.debug();
        {/* expect(screen); */}
    });

    test('Debe mostrar el titulo en un h1', () => {

        render(<FirstApp title = {title} />);
        expect(screen.getByRole('heading', {level:1}).innerHTML).toContain(title);
    });

    test('Debe mostrar el subtitulo enviado por props ', () => {
        render(<FirstApp title = {title} subtitle = {subtitle} />);
        expect(screen.getAllByText(subtitle).length).toBe(1);
    })
    
})
