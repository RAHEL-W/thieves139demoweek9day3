import React, { useState } from 'react'
import './To-do.css'
import { MdDeleteForever } from "react-icons/md";
import { IoMenu } from "react-icons/io5";
import { BsEmojiSmileUpsideDownFill } from "react-icons/bs";

const To_do = () => {
  const [to_do, setTo_Do] = useState([
    
  ]);

  const [newItem, setNewItem] = useState('');

  const handleClick = (index) => {
    const newTo_Do = to_do.filter((_, idx) => idx !== index);
    setTo_Do(newTo_Do);
  };

  const addNewItem = () => {
    if(newItem) {
      setTo_Do([...to_do, newItem]);
      setNewItem(''); // Reset input field after adding
    }
  };

  return (
    <>
      <div className="box">
        <div className="font">
          <p><IoMenu size={40} />{to_do.length}</p>
          <h1>todo list</h1>
        </div>

        <div className="list">
          {to_do.map((item, index) => (
            <p key={index}>{item}
              <button id='mark' onClick={() => handleClick(index)}>
                <MdDeleteForever size={18} color={'rgb(183, 109, 252)'} />
              </button>
            </p>
          ))}
          
          <div className="adding">


          <input id='input'
            type="text"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            placeholder="Add new item"
          />
          <button id='add' onClick={addNewItem}>Add Item</button>
          </div>
         
        </div>
      </div>
    </>
  )
}

export default To_do;