import {render, screen} from '@testing-library/react';
import { GifItem } from '../../src/Components/GifItem';


describe('Pruebas en GifItem', () => {

    const title = 'Honoka Kousaka';
    const url = 'https://lovelive.com';

    test('Debe hacer match con el snapshot ', () => {
        const {container} = render(<GifItem title = {title} url = {url}/>);
        expect(container).toMatchSnapshot();
    });
  
    test('Debe mostrar la imagen con el URL y ALT indicado ', () => {
        render(<GifItem title = {title} url = {url}/>);
        screen.debug();
        expect(screen.getByRole('img').alt);
    })

    test('Debe mostrar el titulo en el componente ', () => {  //Solo funcionará con el title del <p>, ya que el otro title está en un <alt>
        render(<GifItem title = {title} url = {url}/>);
        expect(screen.getByText(title)).toBeTruthy();
    })
    
})
