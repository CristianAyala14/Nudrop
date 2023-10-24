//funciona solo para filtrar galeria.
import { useState } from "react";

function useFilter(initialstate="todas"){
    const[filter, setFilter]=useState(initialstate)
    function applyFilter(ImgGalery){
        switch (filter) {
            case "grupal":
                return ImgGalery.filter((imgs) => imgs.grupal);
            case "cantante":
                return ImgGalery.filter((imgs) => imgs.cantante);
            case "bajista":
                return ImgGalery.filter((imgs) => imgs.bajista);
            case "guitarrista1":
                return ImgGalery.filter((imgs) => imgs.guitarrista1);
            case "guitarrista2":
                return ImgGalery.filter((imgs) => imgs.guitarrista2);
            case "baterista":
                return ImgGalery.filter((imgs) => imgs.baterista);
            default:
                return ImgGalery.filter((imgs) => imgs.grupal);
        }
    };
    return {filter, setFilter, applyFilter};
} 

export default useFilter;