import React, { useState } from 'react'
import { IoMdCheckmark } from "react-icons/io";
import { IoMenu } from "react-icons/io5";


interface IToDo{
    item : String
  }
  

const Todo = () => {

    const [todo, setToDo] = useState([
        'pary',
        'Exercise ',
        'cleaning house',
      
        'prepare  meal',
       ' loundry'
    
      ])
      const handleClick = (item[idx])
      
  return (
  
    <>
      
  <ul>
    {todo.map((item, idx)=>(
        
        <li key={idx}>{item}
        <button onClick={(item[idx])=>setToDo(todo.filter((item) => item !== item[idx]))}><IoMdCheckmark /></button>
        </li>
    ))}
  </ul>
    </>
  )
}

export default Todo