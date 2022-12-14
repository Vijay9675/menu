import React ,{useEffect, useState} from 'react'
import './style.css'
import data from './data'
import {FiChevronRight,FiChevronLeft} from 'react-icons/fi'
import { FaQuoteRight } from 'react-icons/fa'

const Main = () => {
  const[people,setPeople]=useState(data);
  const[index,setIndex] =useState(2);
  useEffect(()=>{

  },[index,people])
  console.log(data)
  return(
  <section className='section'>
    <div className='title'>
      <h2>
        <span>/</span>Reviews
      </h2>
    </div>
    <section className='section-center'>
      {people.map((person,personIndex)=>{
         const{id,image,name,title,quote} =person;
         let position ='nextSlide';
         if(personIndex ===index){
          position='activeSlide';
         }if(personIndex ===index-1 || (index===0 && personIndex===people.length -1)){
          position='lastSlide';
         }
         return(
          <article key={id}>
            <img src={image} alt={name} className='person-img' />
            <h4>{name}</h4>
            <p className='title'>{title}</p>
            <p className='text'>{quote}</p>
            <FaQuoteRight className='icon' />
          </article>
         );
        })
      }
      <button className='prev' onClick={()=>setIndex(index-1)}>
        <FiChevronLeft />
      </button>

      <button className='next' onClick={()=>setIndex(index+1)}>
        <FiChevronRight />
      </button>
    </section>
    
    
    
  </section>
  )
}
    

export default Main