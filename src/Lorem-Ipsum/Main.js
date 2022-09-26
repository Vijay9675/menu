import React ,{useState} from 'react'
import './style.css'
import data from './data'
const Main = () => {
    const[count,setCount]=useState(0);
    const[text,setText]=useState([]);
    console.log(data);
  return (
    <section className='section-center'>
        <h3>Tired of Lorem Ipsum ?</h3>
        <form className='lorem-form'>
            dfsd
        </form>
    </section>
  )
}

export default Main