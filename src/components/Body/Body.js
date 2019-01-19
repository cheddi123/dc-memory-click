import React from "react";
import "./style.css"


const Bodys = props => (
    <div
         value={props.id}
        onClick={() => props.handleClick(props.id)}>

        <div >
            <img className="img grow"  alt="" src={props.photo} />
        </div>

   </div>
)

export default Bodys