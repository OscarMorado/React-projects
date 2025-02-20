import { useEffect, useState } from 'react'
import { getGifs } from '../Helpers/getGifs';

export const useFetchGifs = (category) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
    const getImages = async() => {
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false);
    }

    /* Hook para disparar un efecto, recibe un callback a alguna función, y una lista de dependencias */
    useEffect(() => { 
        getImages();
    }, []) //Si las dependencias se dejan vacías solo se ejecutará cuando se construya el componente

  return {
    images,
    isLoading

  }
}

