import React, { useContext } from "react";
import "../CartItems/CartItems.css";
import { ShopContext } from "../../Context/ShopContext";
import remove_Icons from "../Asset/cart_cross_icon.png";
const CartItems = () => {
  const { getTotalCartItems, all_product, cartItems, removefromCart,getTotalAmout } = useContext(ShopContext);
  return (
    <div className="cartitems">
      <div className="cartitems-format-name">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e) => {
        return cartItems[e.id] > 0 ? (
          <div key={e.id}>
            <div className="cartitems-format cartitems-format-name">
              <img src={e.image} alt="" className="carticon-product-icon" />
              <p>{e.name}</p>
              <p>${e.new_price}</p>
              <button className="cartitems-quantity">{cartItems[e.id]}</button>
              <p>${e.new_price * cartItems[e.id]}</p>
              <img
                className="cartitems-remove-icons"
                src={remove_Icons}
                alt=""
                onClick={() => {
                  removefromCart(e.id);
                }}
              />
            </div>
            <hr />
          </div>
        ) : null;
      })}
      {getTotalCartItems() === 0 && <h3 className="Empty-cart">Empty Cart</h3>}
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Total</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              <p>${getTotalAmout()}</p>
            </div>
            <hr/>
            <div className="cartitems-total-item">
              <p>Shipping Fee</p>
              <p style={{marginLeft:"auto"}}>Free</p>
              <hr/>
            </div>
            <div className="cartitems-total-item">
              <h3>Total</h3>
              <h3>${getTotalAmout()}</h3>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartitems-promocode">
          <p>If you have a promo code, Enter it here.</p>
          <div className="cartitems-promobox">
            <input type="text" placeholder="Promo Code"/>
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
