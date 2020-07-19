import React, { useState } from 'react'
import './AddCard.css'
import {appendApiKey} from '../utils';
import Axios from 'axios'

const AddCard = ({listId, add, close, newCard}) => {
    const [ cardTitle, setCardTitle] = useState('')
    
    const handelInput = (e) => {
        setCardTitle(e.target.value)
    }
    const addCard = (e) => {
        const CardPos=e.target.parentElement.parentElement.parentElement.parentElement.childElementCount-1;
        
        const data = {
            "title": cardTitle,
            "description": null,
            "due_date": null,
            "position": CardPos,
            "status": 1,
            "list": {
                "id": listId
            }
        }
        const url = appendApiKey("cards")
        Axios.post(url, data)
        .then( res => {
            newCard(res.data)
        })
    }
    if(!add)
        return null;
    return (
        <div id="card-input">
            <textarea id="newCard" placeholder="Enter a title for this card..." onChange={handelInput} autoFocus></textarea>
            <div>
                <a onClick={addCard} className="green-button">Add Card</a>
                <a onClick={close}><i className="fas fa-times"></i></a>
            </div> 
        </div>
    )
}

export default AddCard
