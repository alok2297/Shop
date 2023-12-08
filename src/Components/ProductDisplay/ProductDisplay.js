import React, { useContext } from 'react'
import '../ProductDisplay/ProductDisplay.css';
import star_icon from '../Asset/star_icon.png';
import star_dull_icon from '../Asset/star_dull_icon.png';
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {
  const {product} = props;
  const {addtoCart} = useContext(ShopContext);

  return (
    <div className='productdisplay'>
      <div className='productdisplay-left'>
      <div className='productdisplay-image-list'>
        <img src={product.image} alt='#'/>
        <img src={product.image} alt='#'/>
        <img src={product.image} alt='#'/>
        <img src={product.image} alt='#'/>
      </div>
      <div className='productdisplay-image'>
        <img className='productdisplay-main-img' src={product.image} alt='#'/>
      </div>
      </div>
      <div className='productdisplay-right'>
        <h1>{product.name}</h1>
        <div className='productdisplay-right-star'>
            <img src={star_icon} alt='#'/>
            <img src={star_icon} alt='#'/>
            <img src={star_icon} alt='#'/>
            <img src={star_icon} alt='#'/>
            <img src={star_dull_icon} alt='#'/>
            <p>(122)</p>
        </div>
        <div className='productdisplay-right-prices1'>
            <div className='productdisplay-right-prices'>
            <div className='productdisplay-right-price-old'>
                ${product.old_price}
            </div>
            <div className='productdisplay-right-price-new'>
                ${product.new_price}
            </div>
            </div>
            <div className='productdisplay-right-discription'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
            <div className='productdisplay-right-size'>
                <h1>Select Size</h1>
                <div className='productdisplay-right-sizes'>
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
                <button onClick={()=>{addtoCart(product.id)}}>ADD TO CART</button>
                <p className='productdisplay-right-category'>
                    <span>Category :</span> Women, T-sert, Crop Top
                </p>
                <p className='productdisplay-right-category'>
                    <span>Tags :</span> Modern, Latest
                </p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDisplay;
