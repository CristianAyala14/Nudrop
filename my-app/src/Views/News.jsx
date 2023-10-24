import "../styles/news.css"
import New from "../components/new"
import Anuncios from "../mocks/anuncios"

function News(){

    return (
        <div className="container">
            <div className="news-container">
                {Anuncios.map((anuncio, index) => (
                    <New
                        key={index}
                        img={anuncio.img}
                        tittle={anuncio.tittle}
                        text={anuncio.text}
                    />
                ))}
            </div>
        </div>  
    )
}
export default News;

