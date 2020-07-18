import React, { useState } from 'react'
import './List.css'
import Card from './Card'
import {appendApiKey} from '../utils';
import Axios from 'axios'
import AddCard from './AddCard'
import ListAction from './ListAction'

const List = (props) => {

    const [list, setList] = useState(props.list)
    const [listTitle, setListTitle] = useState(list.title)
    const [cards, setCards] = useState(list.cards)
    const [addCardClick, setAddCardClick] = useState(false)
    const [editListClick, setEditListClick] = useState(false)

    const inputRef = React.createRef()

    const handelInput = e => {
        const title = e.target.value;
        setListTitle(title)
        console.log(list.title)
        if(e.key === "Enter" && list.title !== title) {
            changeTitle(e)
            inputRef.current.blur()
        } 
    }
    const changeTitle = (e) => {
        e.preventDefault()
        const url = appendApiKey("lists/"+list.id);
        
            Axios.put(url,{
                id: list.id,
                title: e.target.value,
                position: list.position
            }).then(res => 
                console.log(res)
            )      
    }

    const addCard = () => {
        setAddCardClick(!addCardClick)
    }
    
    const addNewCard = (newCard) => {
        list.cards.push(newCard)
        addCard();
        setList(list)
    }

    const editList = () => {
        setEditListClick(!editListClick)
    }

    const deleteCard = (id) => {
        var newCard = cards.filter(c => c.id !== id)
        console.log(newCard)
        setCards(newCard)
        console.log(cards)
    }
    
    return (
        <div className="list" style={{cursor: 'default'}}>
            <div style={{height: 35+'px'}}>
                <input type="text" ref={inputRef} className="listTitle" value={listTitle} onChange={handelInput} onKeyPress={handelInput}/>
                <i className="fas fa-ellipsis-h edit" onClick={editList}>
                {
                    editListClick && <ListAction list={props.list} delete={props.deleteList}/>
                }
                </i>
                
            </div>
            <span>
                {
                    cards.map(card => (
                        <Card key={card.id} card={card} delete={deleteCard} />
                    ))
                }
            </span>
            <div id="add-card">
                <a onClick={addCard}> &nbsp; 
                    <i className="fas fa-plus"></i> &nbsp; Add another card
                </a>
                <a title="Create from template...">
                    <i className="far fa-window-restore"></i>
                </a> 
                <AddCard listId={list.id} add={addCardClick} close={addCard} newCard={addNewCard}/>
            </div>          
        </div>
    )
}

export default List
