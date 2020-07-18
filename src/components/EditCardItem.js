import React from 'react'
import './EditCardItem.css';
import {appendApiKey} from '../utils';
import Axios from 'axios';

const EditCardItem = ({card, archive, showEdit}) => {

    const d = (e) => {
        e.preventDefault();
        const url = appendApiKey("cards/"+card.id);
        Axios.delete(url).then(res => {
            archive(card.id);
            showEdit();
        })
        
    }

    return (
            <div>
                <div>
                    &nbsp; <i className="fas fa-tag"></i>
                    &nbsp;&nbsp; <label>Edit Labels</label>
                </div>
                <div>
                    &nbsp; <i className="far fa-user"></i>
                    &nbsp;&nbsp; <label>Change Members</label>
                </div>
                <div>
                    &nbsp; <i className="fas fa-move"></i>
                    &nbsp;&nbsp; <label>Move</label>
                </div>
                <div>
                    &nbsp; <i className="fas fa-tv"></i>
                    &nbsp;&nbsp; <label>Copy</label>
                </div>
                <div>
                    &nbsp; <i className="far fa-clock"></i>
                    &nbsp;&nbsp; <label>Change Due Date</label>
                </div>
                <div onClick={d}>
                    &nbsp; <i className="fas fa-archive"></i>
                    &nbsp;&nbsp; <label>Archive</label>
                </div>
            </div>
    )
}

export default EditCardItem
