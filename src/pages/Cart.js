import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <div>
      <h1>Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty. Add items to cart!</p>
      ) : (
        <div>
          {cart.map((product) => (
            <div key={product.id}>
              <img src={product.image} alt={product.title} style={{ width: '100px' }} />
              <h2>{product.title}</h2>
              <p>${product.price}</p>
              <button onClick={() => removeFromCart(product.id)}>Remove</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;