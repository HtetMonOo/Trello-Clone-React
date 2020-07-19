import React from 'react';
import Member from './Member';

const CardMembers = ({card}) => {
    if(card.members.length!==0){
    return (
        <div id="card-members">
            <h3>MEMBERS</h3>
            <div style={{display: 'flex'}}>
            {
                card.members.map(mem => ( <Member key={mem.id} member={mem} />))
            }                     
                <div id="member">
                    <i className="fas fa-plus"></i>
                </div>
            </div>
        </div>
    )}else {
        return null;
    }
}

export default CardMembers;
