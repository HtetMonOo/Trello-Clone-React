import React, {useState} from 'react'
import './Card.css'
import Label from './Label'
import Member from './Member'
import Modal from './Modal'
import EditCard from './EditCard'
import ReactDOM from 'react-dom'
import {appendApiKey} from '../utils';
import Axios from 'axios'

const Card = (props) => {

    const [card, setCard] = useState(props.card)
    const [show, setShow] = useState(false)
    const [editCardClick, setEditCardClick] = useState(false)
    const [pos, setPos] = useState([])

    const showModal= (e)=> {
        if(e.target.className !== 'fas fa-edit')
            setShow(!show)
    }

    const editCard = (e) => {
        setPos(ReactDOM.findDOMNode(e.target.parentElement).getBoundingClientRect())
        showEditCard();
    }

    const showEditCard =() => {
        setEditCardClick(!editCardClick)
    }

    const updateCard =(data) =>{
        const url = appendApiKey("cards")
            Axios.put(url, data)
            .then( res =>{
                setCard(res.data);
            })
    }

    return (
        <>
        <div id="card" onClick={showModal}>
            <i className="fas fa-edit" onClick={editCard}>
            </i>
                {
                    card.labels &&
                    card.labels.map(label => ( <Label key={label.id} label={label}/>) )
                }
            <div id="title">{card.title}</div>
            <div>
                <div>
                    {card.description && <i className="fas fa-align-left"></i> }
                    {card.checklist && <i className="fas fa-bars"></i>}
                </div>
                <div style={{display: 'flex'}}>
                    {
                        card.members &&
                        card.members.map(mem => (
                            <Member key={mem.id} member={mem} />
                        ))
                    }
                </div>
            </div>
        </div>
            {show && <Modal card={card} show={show} close={showModal} updateCard={updateCard}/>}
            {
                editCardClick && 
                <EditCard pos={pos} card={card} updateCard={updateCard} archive={props.delete} showEditCard={showEditCard}/>
            }
        </>
    )
}

export default Card
