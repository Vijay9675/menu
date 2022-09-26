import React ,{useState} from 'react'
import {AiOutlineMinus , AiOutlinePlus} from 'react-icons/ai'
const Question = ({title,info}) => {
    const[showInfo,setShowInfo] =useState(true);
  return (
    <article className='question'>
        <header>
        <h4>{title}</h4>
        {/* Here is the main logic to hide and reveal Simultaneously */}
        <button className='btn' onClick={()=>setShowInfo(!showInfo)}>{showInfo ? <AiOutlineMinus /> :<AiOutlinePlus />} </button>
        </header>
        {showInfo && <p>{info}</p> }

        
    </article>
  )
}

export default Question