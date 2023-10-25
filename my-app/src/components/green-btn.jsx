import "../styles/green-btn.css"

import React from 'react'

const GreenBtn = (props) => {
  return (
    <button className='product-btn' onClick={props.onClick} >{props.btnContent}</button>
  )
}

export default GreenBtn;
