import React, {useState} from 'react';
import './Description.css';
import {appendApiKey} from '../utils';
import Axios from 'axios';

const Description = ({card, updateCard}) => {

    const [addDescriptionClick, setAddDescriptionClick] = useState(false);
    const [newDescription, setNewDescription] = useState("");

    const handelClick = () => {
        setAddDescriptionClick(!addDescriptionClick);
    }

    const handelInput = (e) => {
        setNewDescription(e.target.value);
    }

    const addDescription = (e) => {
        const data ={
                "id": card.id,
                "title": card.title,
                "description": newDescription,
                 "list": {
                     "id": card.list.id
                 }
             };
        handelClick();
        updateCard(data);
    }

    return (
        <div>
                <i className="fas fa-align-left"></i>
                <div>
                    <div style={{display: "flex", alignItems: "flex-start"}}> 
                        <h2>Description</h2>
                        { card.description && <button onClick={handelClick}>Edit</button> }
                    </div>
                    {
                        addDescriptionClick ?
                            <div id="add-description">
                                 <textarea placeholder="Add a more detailed description..."onChange={handelInput} autoFocus>{card.description}</textarea>
                                <div>
                                    <a onClick={addDescription} className="green-button">Save</a>
                                    <a onClick={handelClick}><i className="fas fa-times"></i></a>
                                </div> 
                            </div> :
                        card.description ? <p>{card.description}</p> : 
                        <div className="card-update-item" onClick={handelClick} style={{width: 95+"%", height: 50+"px"}}>
                            Add a more detailed description...
                        </div>
                    }
                </div>
        </div>
    )
}

export default Description
