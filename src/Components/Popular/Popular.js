import React, { useEffect, useState } from 'react'
import './Popular.css';
import Item from '../Items/Item';
const Popular = () => {
  const [data_prodoct,set_data_product] = useState([]);
  useEffect(()=>{
    fetch('http://localhost:5000/popularInWomen').then((res)=>res.json()).then((data)=>set_data_product(data));
  },[]);
  return (

    <div className='popular'>
      <h1>POPULAR IN WOMEN</h1>
      <div className='underline'>
      </div>
      <div className='popular-item'>
        {data_prodoct.map((item,i)=>{
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        })}
      </div>
    </div>
  )
}

export default Popular
