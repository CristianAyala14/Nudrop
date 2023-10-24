import "../styles/galeria.css"
import useFilter from "../customhooks/useFilter";
import ImgGalery from "../mocks/imagenesgaleria"
import RenderImgs from "./renderimgs";
import FilterOptions from "../components/filteroptions"

function Galeria(){
    const {filter, setFilter, applyFilter} = useFilter(); 
    const afterfilter = applyFilter(ImgGalery); //uso propiedad de mi custom hook para filtrar las tareas obtenidas en usestate tasks.


    return(
        <div className="gallery">
            <FilterOptions filter={filter} setFilter={setFilter}/> 
            <RenderImgs imgs={afterfilter}/>
        </div>
    );
};

export default Galeria;
