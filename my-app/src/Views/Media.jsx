import "../styles/media.css"
import Carousel from "../components/caroucel"
import Galeria from "../components/galeria";

function Media(){
    return (
        <div className="media-container">
            <Carousel/>
            <div className="record-videos">
                
            </div>
            <Galeria/>
        </div>
    )
}
export default Media;