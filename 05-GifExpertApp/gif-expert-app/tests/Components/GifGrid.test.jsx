import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/Components/GifGrid";
import { useFetchGifs } from "../../src/Hooks/useFetchGifs";

jest.mock("../../src/Hooks/useFetchGifs"); //Hace un mock completo del path 

describe('Pruebas en GifGrid', () => {
    const category = 'Honoka Kousaka';

    test('Debe mostrar el loading inicialmente', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });

        render(<GifGrid category = {category}/>)
        screen.debug();

        expect(screen.getByText('Cargando...'));
        expect(screen.getByText(category));
    });

    test('Debe mostrar items cuando se cargan las imágenes useFetchGifs ', () => {

        const gifs = [
            {
                id: 'ABC',
                title: 'Honoka',
                url: 'https://localhost/Honoka.img'
            },
            {
                id: 'ASD',
                title: 'Kousaka',
                url: 'https://localhost/Kousaka.img'
            },
        ]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: true
        });

        render(<GifGrid category = {category}/>);
        expect(screen.getAllByRole('img').length).toBe(2);

    })
    
    
});
