import * as React from 'react';
import "./Footer.css";

function Footer() {
    
    return (
        <div className="gridfoot">
            <div className="gridfootredes">
                <div className="redes">
                    <a href="https://www.instagram.com"><img alt="instagram" src="/archivos/instagram.png" className="icon" /> Instagram </a>
                </div>
                <div className="redes">
                    <a href="https://www.whatsapp.com"><img alt="whatsapp" src="/archivos/whatsapp.png" className="icon" /> Whatsapp</a>
                </div>
                <div className="redes">
                    <a href="https://www.linkedin.com"><img alt="linkedin" src="/archivos/linkedin.png" className="icon" /> LinkedIn</a>
                </div>
            </div>
            <div className="subir">
                <a href="#topup">
                    <div className="flechita"></div>
                </a>
            </div>
            <div className="derechos">
                <p>Sitio y logos © 2023 derechos reservados</p>
            </div>
        </div>
    );
}

export default Footer;