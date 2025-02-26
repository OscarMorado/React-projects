import { renderHook, waitFor } from "@testing-library/react"
import { useFetchGifs } from "../../src/Hooks/useFetchGifs"


describe('Pruiebas en el hook useFetchGifs', () => {
    test('Debe regresar el estado inicial', () => {
        const {result} =renderHook(() => useFetchGifs('Honoka Kousaka'));
        const {images, isLoading} = result.current;

        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy();
    });
    
    test('Debe retornar un arreglo de imágenes e isLoading en false', async () => {
        const {result}  =renderHook(() => useFetchGifs('Honoka Kousaka'));

        await waitFor(
            () => expect(result.current.images.length).toBeGreaterThan(0),
            
        );

        const {images, isLoading} = result.current;


        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();
    });
});
