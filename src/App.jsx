import React, { useState } from 'react';
import Diss from "./Diss"
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Lists from "./Lists"


function App() {
 const animals= ["cat","dog","rabbit"];
 const [item,setItem]=useState([]);

 const [hclick,setclick]=useState(false);

 function clickItem(id){
   console.log(id+"asdf");
   const woo=animals[id];
   console.log(woo);
   return setItem(prevValue => [...prevValue,woo]);
   

 }
 
 function handleClick(){
  return setclick(true);
 }
 
 
 
 
  return (
    <div>
    <p>My values are as follows</p>
    
    <div className="row">
    <div className="list-group col-md-5" style={{width:400}}>
   {animals.map((data,index) =>  <Diss value={data} key={index} id={index} clickedItem={clickItem}/> )}
   </div>
   
   
   <div className="col-md-2"><Button  onClick={handleClick} color="primary">Primary</Button></div>
    <div className="col-md-5">{
      
     (hclick)? item.map((data,index) =>  
     <Lists value={data} key={index} id={index}   /> 
   ):null }
   </div>
       
       
       
       </div>
     </div>
  );
}

export default App;


