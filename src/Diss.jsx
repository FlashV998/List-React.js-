import React, { useState } from "react";
import Packet from "./Packet";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


function Diss(props){

  const [hstate,setState]=useState(true);
  
  function handleState(ps){
 (hstate)? setState(false):setState(true);
 props.clickedItem(ps.target.id);  
}
  

function handleClick(ps){
  props.clickedItem(ps.target.id)
  setState(true); 
}

return(
  
 
    
  <li id={props.id} href="#" onClick={handleState} className={hstate === true ?"list-group-item list-group-item-action":"list-group-item list-group-item-action active"}>
   {props.value}
   </li>

  );

}
export default Diss;