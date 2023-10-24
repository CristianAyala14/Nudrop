import Logo from "../img/logo.jpeg"
import "../styles/home.css"
function Home(){
    return (
        <div className="home-view">
            <div className="home-logo"><img className="home-logo-img" src={Logo} alt="Logo" /></div> 
        </div>
    )
}
export default Home;



