import React from 'react'
import './Backdrop.css'
const Backdrop = props =>(
    <div onClick={props.click} className="backdrop"></div>
)

export default Backdrop