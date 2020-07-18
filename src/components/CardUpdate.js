import React from 'react'
import './CardUpdate.css'

const CardUpdate = () => {
    return (
        <div id="card-update">
                <div>
                    <h3>SUGGESTED</h3>
                    <i id="setting" className="fas fa-cog"></i>
                </div>
                <div>
                    &nbsp; <i className="far fa-user"></i>
                    &nbsp; <label>Join</label>
                </div>
                <a>Feedback</a>
                <h3>ADD TO CARD</h3>
                <div>
                    &nbsp; <i className="far fa-user"></i>
                    &nbsp; <label>Members</label>
                </div>
                <div>
                    &nbsp; <i className="fas fa-tag"></i>
                    &nbsp; <label>Labels</label>
                </div>
                <div>
                    &nbsp; <i className="far fa-check-square"></i>
                    &nbsp; <label>Checklist</label>
                </div>
                <div>
                    &nbsp; <i className="far fa-clock"></i>
                    &nbsp; <label>Due Date</label>
                </div>
                <div>
                    &nbsp; <i className="fas fa-paperclip"></i>
                    &nbsp; <label>Attachment</label>
                </div>
                <div>
                    &nbsp; <i className="fas fa-tv"></i>
                    &nbsp; <label>Cover</label>
                </div>
                <h3>POWER-UPS</h3>
                <div>
                    &nbsp; <i className="fab fa-github"></i>
                    &nbsp; <label>GitHub</label>
                </div>
                <div>
                    <label>Get More Power-Ups</label>
                </div>
                <h3>ACTIONS</h3>
                <div>
                    &nbsp; <i className="fas fa-arrow-right"></i>
                    &nbsp; <label>Move</label>
                </div>
                <div>
                    &nbsp; <i className="far fa-copy"></i>
                    &nbsp; <label>Copy</label>
                </div>
                <div>
                    &nbsp; <i className="fas fa-money-check"></i>
                    &nbsp; <label>Make Template</label>
                </div>
                <div>
                    &nbsp; <i className="far fa-eye"></i>
                    &nbsp; <label>Watch</label>
                </div>
                <span className="line"></span>
                <div>
                    &nbsp; <i className="fas fa-archive"></i>
                    &nbsp; <label>Archive</label>
                </div>
                <div>
                    &nbsp; <i className="fas fa-share-alt"></i>
                    &nbsp; <label>Share</label>
                </div>
            </div>
    )
}

export default CardUpdate
