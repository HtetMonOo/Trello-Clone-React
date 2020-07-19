import React from 'react';
import Label from './Label';

const CardLabels = ({card}) => {
    if(card.labels.length!==0){
    return (
        <div id="card-labels">
            <h3>LABELS</h3>
            <div style={{display: "flex"}}>
            {
                card.labels.map(label => (  <Label key={label.id} label={label} name={label.name}/> ) )
            }
                <div id="label">
                    <i className="fas fa-plus"></i>
                </div>
            </div>
        </div> 
    )}else {
        return null;
    }
}

export default CardLabels;
