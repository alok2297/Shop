import React, { useContext, useState } from 'react';
import './Navbar.css';
import logo from '../Asset/logo.png';
import cart_icon from '../Asset/cart_icon.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
const Navbar = () => {
    // state for the navbar
    const [menu,setmenu] = useState("shop");  
    const {getTotalCartItems} = useContext(ShopContext);

  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt='$'/>
        <p>SHOPIFY</p>
      </div>
      <ul className='nav-menu'>
         <li onClick={()=>{setmenu("shop")}}><Link to='/' style={{textDecoration:'none'}}>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
         <li onClick={()=>{setmenu("mens")}}><Link to='/mens' style={{textDecoration:'none'}}>MenShop</Link>{menu==="mens"?<hr/>:<></>}</li>
         <li onClick={()=>{setmenu("womens")}}><Link to='/womens' style={{textDecoration:'none'}}>WomenShop</Link>{menu==="womens"?<hr/>:<></>}</li>
         <li onClick={()=>{setmenu("kids")}}><Link to='/kids' style={{textDecoration:'none'}}>KidsShop</Link>{menu==="kids"?<hr/>:<></>}</li>
      </ul>
      <div className='login-cart'>
        <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'><img src={cart_icon} alt='$'/></Link>
        <div className='nav-cart-count'>{getTotalCartItems()}</div>
      </div>
    </div>  
  )
}

export default Navbar;
