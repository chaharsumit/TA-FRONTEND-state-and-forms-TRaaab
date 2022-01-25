function Cart(props){
  console.log(props.cart);
  return (
    
    <div className={props.status ? "cart flex" : "none"}>
      
      <img onClick={props.toggleCart} className="cross" src="products/sprite_delete-icon.png" />
      
      <header className="cart-header flex">
        <div>
          <img src='products/bag-icon.png' className="cart-icon" />
        </div>
        <h2 className="cart-heading">Cart</h2>
      </header>
      
      {
        props.cart.map(item => (
          <ul className="cart-items flex">
            <img onClick={() => props.deleteFromCart(item)} src="products/sprite_delete-icon.png" className="remove" />
            <li className="cart-item-card flex">
              <img src={`products/${item.sku}_2.jpg`} />
              <div>
                <h4>{item.style}</h4>
                <p><span>X</span> | <span>{item.style}</span></p>
                <p>Quantity: 1</p>
              </div>
              <div>
                <p className="cart-price">${item.price}</p>
                <div>
                  <button className="cart-btn">+</button>
                  <button className="cart-btn">-</button>
                </div>
              </div>
            </li>
          </ul>
        ))
      }
      
      <div className="subtotal flex">
        <p>Subtotal</p>
        <p className="cart-price">$
          {
            props.cart.reduce((acc, curr) => {
              acc += curr.price;
              return acc;
            }, 0)
          }
        </p>
      </div>
      <button className="checkout-btn">CHECKOUT</button>
    </div>
  
  )
}

export default Cart;