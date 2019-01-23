import React from "react";
import "./style.css"


const Bodys = props => (
    <div
         value={props.id}
        onClick={() => props.handleClick(props.id)}
        >
          <img className="img grow"  alt="" src={props.photo}  />
        
     
   </div>
)       
        


export default Bodys