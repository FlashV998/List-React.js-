import React, { useState } from "react";
import Packet from "./Packet";



function Lists(props){

 




return(
  
  <div className="list-group" style={{width:400}}>
    
  <li id={props.id} href="#"  className="list-group-item list-group-item-action active">
   {props.value}
  
  </li>

  </div>
    
);

}
export default Lists;