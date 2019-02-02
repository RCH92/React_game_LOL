import React from "react";
import "./style.css";

function NavBar(props) {
    return(
        <nav className="navbar" >
            <ul>
                <li className="gameTitle">
                    <span className="titleSpan">
                   <img src="/assets/Images/Blitzcrank-Riot-icon.png" className="blitzIcon"></img>
                   <a href="/">Blitzcranks Memory Hook!</a>
                   </span>
                </li>
                <li>Score: <text className="score">{props.score}</text> | Top: <text className="top">{props.top}</text></li>
                <li id="difficultyBox"><img src="/assets/Images/Bronze.png" className="difficulty ez"></img> | <img src="/assets/Images/Challenger.png" className="difficulty hard"></img></li>
            </ul>
        </nav>
    );
}

export default NavBar;