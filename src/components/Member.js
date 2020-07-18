import React from 'react'
import './Member.css'

const Member = ({member}) => {
    try{
        const name = member.name.split(" ")
        var pic = ""
        if(name.length === 1){
            pic = name
        }else{
            pic = name[0].charAt(0).toUpperCase() + name[name.length-1].charAt(0).toUpperCase()
        }
        return (
            <div id="member">
                <p style={{font: 'small'}}>{pic}</p>
            </div>
        )
    }catch{
        return null;
    }
    
}

export default Member
