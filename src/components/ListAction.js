import React from 'react'
import './ListAction.css'
import {appendApiKey} from '../utils';
import Axios from 'axios'

const ListAction = (props) => {

    const deleteList = () => {
        const url = appendApiKey("list/"+props.list.id)
        Axios.delete(url)
        .then(res => {
            props.delete(props.list.id);
        }).catch(err => {
            console.log("fail to delete");
        });
    }
    return (
        <div className="ListAction">
            <div>
                <h5>List Actions</h5>
                <i className="fas fa-times"></i>
            </div> 
            <span className="line"></span>
            <div>Add Card...</div>
            <div>Copy List...</div>
            <div>Move Card...</div>
            <div>Watch</div>
            <span className="line"></span>
            <div>Move All Cards in This List...</div>
            <div>Archive All Cards in This List...</div>
            <span className="line"></span>
            <div onClick={deleteList}>Archive This List...</div>
        </div>
    )
}

export default ListAction
