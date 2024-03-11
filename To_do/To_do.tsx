
import React, { useState } from 'react'
import './To-do.css'
import { MdDeleteForever } from "react-icons/md";
import { IoMenu } from "react-icons/io5";
import { BsEmojiSmileUpsideDownFill } from "react-icons/bs";


interface ITo_Do{
  item : String
}




const To_do = () => {




  
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
     <p><IoMenu  size ={40}/>{to_do.length}</p>
     <h1>todo list</h1>
     </div>
   
<div className="list">
  {to_do.map((item, index) => (<p key={index}>{item}
   <button id='mark' onClick={()=> handleClick(index)}>
    <MdDeleteForever size={18} color={'rgb(183, 109, 252)'} />
    </button></p>))}
    {(to_do.length) !== 0 ?

  <button id='add' onClick={()=>setTo_Do([...to_do, 'walk'])}>add</button>
 :
  <p id='finsh'>Ta-da, list free <BsEmojiSmileUpsideDownFill color={'orange'} /></p>
    }
</div>

  
    </div>
   
    </>
  )
}

export default To_do

