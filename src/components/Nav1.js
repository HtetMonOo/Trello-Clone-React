import React from 'react' 
import './nav1.css';

function Nav1() {

    return (
    <nav id="nav1">
        <div className="wrapper1">
            <a href="#"><i className="fas fa-bars"></i></a>
            <a href="#"><i className="fas fa-home"></i></a>
            <a href="#"><i className="fab fa-trello"></i> &nbsp; Boards</a>
            <div><input type="text" id="search" /><i className="fas fa-search"></i></div>
        </div>
        <a id="trello-link" href="https://trello.com"><i className="fab fa-trello"></i> Trello</a>
        <div className="wrapper2">
            <a><i className="fas fa-plus"></i></a>
            <a href="#"><i className="fas fa-info-circle"></i></a>
            <a href="#"><i className="far fa-bell"></i></a>
            <a href="#"><i className="fas fa-user"></i></a>
        </div>
    </nav>
    )
}

export default Nav1