import "../styles/media.css"
import Carousel from "../components/caroucel"
import Galeria from "../components/galeria";

function Media(){
    return (
        <div className="media-container">
            <Carousel/>
            <Galeria/>
            <div className="record-videos">
                
            </div>
        </div>
    )
}
export default Media;