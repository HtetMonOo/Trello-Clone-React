import React, { useState, useEffect } from 'react'
import './Nav2.css'
import {appendApiKey} from '../utils';
import Axios from 'axios'
import Member from './Member'

function Nav2() {

    const url = appendApiKey("accounts");
    const [members, setMembers] = useState([])
    useEffect(() => {
        fetchMembers()
    },[])
    
    const fetchMembers = async() => {
        try{
            const res = await Axios.get(url)
            setMembers(res.data)
        }catch{
            console.log("in the catch")
            setMembers([])
        }
    }

    return (
    <nav id="nav2">
        <div className="wrapper1">
            <div><label id="board-name">Trello Clone</label></div>
            <a href="#"><i className="far fa-star"></i></a>
            <div><label>Private Team</label></div>
            <a href="#"><i className="fas fa-users"></i> &nbsp; Team Visible</a>
            <div id="allMem">
                {
                    members.map(member => (
                        <Member key={member.id} member={member}/>
                    ))
                }
            </div>
            <a href="#">Invite</a>
        </div>
        <div className="wrapper2">
            <a href="#"><i className="fas fa-bell"></i> &nbsp; Butler</a>
            <a href="#"><i className="fas fa-ellipsis-h"></i> &nbsp; Show Menu</a>
        </div>
    </nav>
    )
}

export default Nav2
