import React, { useState } from 'react'
import './EditCard.css'
import EditCardItem from './EditCardItem'

const EditCard = (props) => {
    var left = props.pos.left
    var top = props.pos.top
    const [cardTitle, setCardTitle] = useState(props.card.title)

    const handel = (e) => {
        setCardTitle(e.target.value)
    }

    const edit = (e) => {
        e.preventDefault();
        const data = {
            id: props.card.id,
            title: cardTitle,
            description: props.card.description,
            list: {
                id: props.card.list.id
            }
         }
         props.showEditCard();
        props.updateCard(data);
    }
    return (
        <div className="modal2" style={{overflow: "hidden !important"}}>
            <div className="editCard" style={{left, top}}>
                <div>
                    <textarea value={cardTitle} onChange={handel}></textarea>
                    <button className="green-button" onClick={edit}> &nbsp; Save &nbsp; </button>
                </div>
                
                <EditCardItem card={props.card} archive={props.archive} showEdit={props.showEditCard}/>
            </div>
        </div>
    )
}

export default EditCard
