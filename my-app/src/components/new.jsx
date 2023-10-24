import React from 'react'
import "../styles/news.css"

const New = (props) => {
    return (
        <article className="new">
            <div className="new-img-container">
                <img  className='new-img' src={props.img} alt="new-poster" />
            </div>
            <div className="new-info">
                <div className="new-tittle">
                    <p className="tittle">{props.tittle}</p>
                </div>
                <div className="new-text">
                    <p>{props.text}</p>
                </div>
            </div>
        </article>
    )
}

export default New;
