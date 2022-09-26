import React ,{useState} from 'react'
import Review from './Review'
import './index.css'

const Main = () => {
  return (
    <main>
    <section className='container'>
      <div className='title'>
        <h2> Our Review </h2>
        <div >
          <Review />
        </div>
      </div>

    </section>
  </main>
  )
}

export default Main