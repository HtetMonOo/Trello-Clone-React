import React, { useState } from 'react'
import './AddList.css'
import {appendApiKey} from '../utils';
import Axios from 'axios'

const AddList = ({addList, addListClick, showInput, cancel}) => {

    const [listTitle, setListTitle] = useState("")
    
    const handelInput = (e) => {
        setListTitle(e.target.value)
    }

    const add = (e) => {
        e.preventDefault();

        const ListPos=e.target.parentElement.parentElement.parentElement.parentElement.childElementCount-1;

        const data = {
            "title": listTitle,
            "position": ListPos,
         }
         const url = appendApiKey("lists")
         Axios.post(url, data)
         .then(res => {
             setListTitle("")
            addList(res.data)
            }    
        )
    }
    
    return (
        <div>
            <button id="add-list" onClick={showInput}>
                &nbsp; <i className="fas fa-plus"></i>
                &nbsp; Add another list &nbsp;
            </button>
            {
                addListClick ?
                <div id="list-input">
                    <input type="text" id="newList" placeholder="Enter list title..." value={listTitle} onChange={handelInput}autoFocus/>
                    <div>
                        <button className="green-button" onClick={add}>Add List</button>
                        <button onClick={cancel}><i style={{font: 20+'px'}} className="fas fa-times"></i></button>
                    </div> 
                </div> : ""
            } 
                
        </div>
    )
}

export default AddList
