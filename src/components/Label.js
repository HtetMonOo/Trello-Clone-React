import React from 'react'
import './Label.css'

const Label = ({label, name}) => {

    return (
        <div id="label" style={{backgroundColor: label.color}}>{name}</div>
    )
}

export default Label
