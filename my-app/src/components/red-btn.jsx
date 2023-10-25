import React from 'react'
import "../styles/redbtn.css"

const Redbtn = (props) => {
  return (
    <div>
        <button className='btn-eliminar' onClick={props.onClick} >{props.btnContent}</button>   
    </div>
  )
}

export default Redbtn;
