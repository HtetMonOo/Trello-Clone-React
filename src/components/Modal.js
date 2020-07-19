import React from 'react'
import './Modal.css'
import CardInfo from './CardInfo'
import CardUpdate from './CardUpdate'

const Modal = ({show,card,close,updateCard}) => {

    if(!show)
        return null;
    return (
        <div className="modal">    
        <div>
            <CardInfo card={card} updateCard={updateCard}/>
            <CardUpdate />
            
            <button onClick={close}>
                <i className="fas fa-times"></i>
            </button>
        </div>
    </div>
    )
}

export default Modal
