import React from 'react'
import './CardInfo.css'
import Member from './Member'
import Label from './Label'

const CardInfo = ({card}) => {
    return (
        <div id="card-info"> 
            <div>
                    <i className="far fa-window-restore"></i>
                    <div>
                        <h1>{card.title}</h1>
                        <p>in list <button id="parent-list">{card.list.title}</button></p>
                        <div id="mem-label-wrapper">
                            {card.members.length!==0 ? <div id="card-members">
                                <h3>MEMBERS</h3>
                                <div style={{display: 'flex'}}>
                                {
                                    card.members &&
                                    card.members.map(mem => (
                                        <Member key={mem.id} member={mem} />
                                    ))
                                }
                                    <div id="member">
                                        <i className="fas fa-plus"></i>
                                    </div>
                                </div>
                                </div> : ""}
                            {card.labels.length!==0 ? <div id="card-labels">
                                <h3>LABELS</h3>
                                <div style={{display: "flex"}}>
                                {
                                    card.labels &&
                                    card.labels.map(label => ( 
                                        <Label key={label.id} label={label} name={label.name}/>
                                    ) )
                                }
                                    <div id="label">
                                        <i className="fas fa-plus"></i>
                                    </div>
                                </div>
                                </div> : ""}
                        </div>
                    </div>
                </div>
                <div>
                    <i className="fas fa-align-left"></i>
                    <div>
                        <div style={{display: "flex"}}> 
                            <h2>Description</h2>
                            <button>Edit</button>
                        </div>
                        <p>{card.description}</p>
                    </div>
                </div>
                <div>
                    <i className="fas fa-paperclip"></i>
                    <div>
                        <h2>Attachments</h2>
                        <p></p>
                        <button>Add an attachment</button>
                    </div>
                </div>
                <div>
                    <i className="far fa-check-square"></i>
                    <div>
                        <div className="wrapper">
                            <h2>Checklist</h2>
                            <button>Delete</button>
                        </div>
                        <p></p>
                    </div>
                    </div>
                    <div>
                        <i className="fas fa-list-ul"></i>
                        <div className="wrapper">
                            <h2>Activity</h2>
                            <button>Show Details</button>
                        </div>
                    </div>
                    <div>
                        <span id="userp"><i className="fas fa-user"></i></span>
                        <input id="comment" type="text" placeholder="Write buttoncomment..." />
                    </div>
                </div>
    )
}

export default CardInfo
