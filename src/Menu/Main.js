import React , {useState}from 'react'
import items from './Data'
import Categories from './Categories'
import Menu from './Menu'
import './style.css'
const allCategories = ['all',...new Set( items.map((item)=>item.category))]

const Main = () => {
const[menuItems ,setMenuItems]=useState(items);
const[category,setcategory]=useState([]);
const filterItems =(category)=>{
if(category==='all'){
  setMenuItems(items);
  return;
}

const newItems=items.filter((item)=>item.category===category);
setMenuItems(newItems);

}
console.log(allCategories)
  return (
    <main>
        <section className='menu section'>
          <div className='title'>
            <h2> Our Menu </h2>
            <div className='underline'></div>
          </div>
          <div className='btn-container'>
            <button className='filter-btn' onClick={()=>{filterItems("breakfast")}} >Breakfast</button>
            <button className='filter-btn' onClick={()=>{filterItems("lunch")}} >Lunch</button>
            <button className='filter-btn' onClick={()=>{filterItems("shakes")}} >Shakes</button>
            <button className='filter-btn' onClick={()=>{filterItems("all")}} >All</button>
          </div>
          <Menu items={menuItems} />
        </section>
        
    </main>
  )
}

export default Main