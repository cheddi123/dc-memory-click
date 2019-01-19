import React from "react";
import "./style.css"


function Header(props) {
    return (
        <header className="jumbotron bg-info " >
            <div className="row text">
                <div className="col-4 font-weight-bold "><span>DC Clicky Game</span></div>
                <h1  className="col-4 message"> {props.alertMessage} </h1>
                <div className="col-2"> <span>Score: {props.count}</span> </div>
                <div className="col-2"> Top Score :{props.topCount} </div>
            </div>

        </header>
    )
}

export default Header