import "../styles/filteroptions.css"
function FilterOptions({filter, setFilter}){
    
    function handleFilterChange(e){
        setFilter(e.target.value)
    };

    return(
        <div>
            <select className="select-gallery" id="filter" value={filter} onChange={handleFilterChange}>
                <option className="option-gallery"  value="todas">Todas</option>
                <option className="option-gallery" value="grupal">Grupo</option>
                <option className="option-gallery" value="cantante">Cantante</option>
                <option className="option-gallery" value="bajista">Bajista</option>
                <option className="option-gallery" value="guitarrista1">Guitarra 1</option>
                <option className="option-gallery" value="guitarrista2">Guitarra 2</option>
                <option className="option-gallery" value="baterista">Baterista</option>
            </select>
        </div>
    );

};

export default FilterOptions;