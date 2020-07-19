import React, {useState} from 'react';
import './CardChecklist.css';
import ReactDOM from 'react-dom';

const CardChecklist = () => {

    const [checklisClick, setChecklistClick] = useState(false);
    const [pos, setPos] = useState([]);

    const handelClick = (e) => {
        setPos(ReactDOM.findDOMNode(e.target).getBoundingClientRect())
        setChecklistClick(!checklisClick);
    }

    var left = pos.left-400;
    var top = pos.top-12;
    return (
        <>
        <div className="card-update-item" onClick={handelClick}>
                &nbsp; <i className="far fa-check-square"></i>
                &nbsp; <label>Checklist</label>
        </div>
        {
            checklisClick && 
            <div id="addChecklist" style={{left, top}}>
                <div>
                    <h5>Add Checklist</h5>
                    <i className="fas fa-times"></i>
                </div> 
                <span className="line"></span>
                <label>Title</label>
                <input></input>
                <button className="green-button">Add</button>
            </div>
        }
        </>
    )
}

export default CardChecklist;
