import React from 'react';
import '../styles/renderimgs.css';

function RenderImgs({ imgs }) {
    return (
        <div className="image-container">
            <div className="image-gallery">
                {imgs.map((img) => (
                    <img className="imgs-gallery" key={img.id} src={img.image}
                    alt={`Imagen ${img.id}`}/>
                ))}
            </div>
        </div>
    );
}

export default RenderImgs;






