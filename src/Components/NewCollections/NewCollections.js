import React, { useEffect, useState } from 'react'
import './NewCollections.css'
import Item from '../Items/Item';
const NewCollections = () => {
  const [new_collections,setnew_collections] = useState([]);
  useEffect(()=>{
    fetch('http://localhost:5000/newCollections')
    .then((res)=>res.json()).then((data)=>setnew_collections(data));
  },[]);
  return (
    <div className='new-collections'>
      <h1>NEW COLLECTIONS</h1>
      <div className='underline'></div>
      <div className='collections'>
        {new_collections.map((item,i)=>{
            return <Item  key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        })}
      </div>
    </div>
  )
}

export default NewCollections;
