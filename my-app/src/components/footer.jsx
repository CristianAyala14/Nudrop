import React from 'react'
import "../styles/footer.css"

const Footer = () => {
    return (
        <div className='footer'>
            <div>
                <p className='footer-info'>Descargas</p>
            </div>
            <div className='footer-texts'>
                <p className='footer-info'>Copyright © 2023 ÑUDROP </p>
                <p className='footer-info'>Help Newsletter Terms of Use Privacy Policy Do Not Sell or Share My Personal Information Ñudrop is managed by Team Tinchofans </p>
            </div>
            <div className='social'>
                <ul>
                    <li><a href="https://open.spotify.com/intl-es/artist/5ayg570AV7uZJ67UVgNazU"><i class="fa-brands fa-spotify"></i></a></li>
                    <li><a href="https://open.spotify.com/intl-es/artist/5ayg570AV7uZJ67UVgNazU"><i class="fa-brands fa-square-instagram"></i></a></li>
                    <li><a href="https://www.facebook.com/nudropoficial/"><i class="fa-brands fa-square-facebook"></i></a></li>
                </ul>
            </div>
        </div>
    )
}
export default Footer;
