
import React, { useState } from 'react'
import './To-do.css'
import { IoMdCheckmark } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
const To_do = () => {



interface ITo_Do{
  item : String
}

  
    const [to_do, setTo_Do] = useState([
      'pary',
      'Exercise ',
      'cleaning house',
    
      'prepare  meal',
     ' loundry'
  
    ])

    

      const handleClick = (index) => {

        const  newTo_Do = to_do.filter((_, idx) => idx !== index);
        setTo_Do(newTo_Do)
        
      };
   

 
    
  

 
    

  return (
    <>
    
    <div className="box" >
     <div className="font">
     <p><IoMenu  size ={40}/></p>
     <h1>todo list</h1>
     </div>
   
<div className="list">
  {to_do.map((item, index) => (<p key={index}>{item} <button onClick={()=> handleClick(index)}><IoMdCheckmark /></button></p>))}

</div>
  
    </div>
   
    </>
  )
}

export default To_do

