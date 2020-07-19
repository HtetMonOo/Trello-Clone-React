import React from 'react'
import './CardInfo.css'
import Description from './Description'
import CardMembers from './CardMembers'
import CardLabels from './CardLabels'

const CardInfo = ({card, updateCard}) => {
    return (
        <div id="card-info"> 
            <div>
                    <i className="far fa-window-restore"></i>
                    <div>
                        <h1>{card.title}</h1>
                        <p>in list <button id="parent-list">{card.list.title}</button></p>
                        <div id="mem-label-wrapper">
                            {   
                                card.members && <CardMembers card={card} /> 
                            }
                            {   
                                card.labels && <CardLabels card={card} /> 
                            }
                        </div>
                    </div>
                </div>
                <Description card={card} updateCard={updateCard}/>
                
                {
                    card.attachments && 
                <div>
                    <i className="fas fa-paperclip"></i>
                    <div>
                        <h2>Attachments</h2>
                        <p></p>
                        <button>Add an attachment</button>
                    </div>
                </div>
                }
                {
                    card.checklist &&
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
                }
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
