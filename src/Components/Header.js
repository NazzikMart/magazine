import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useState } from "react";
import Order from "./Order";

function showOrders(props) {
  let summa = 0;
  props.orders.forEach((el) => {
    return (summa += Number.parseFloat(el.price));
  });
  return (
    <div>
      {props.orders.map((el) => {
        return <Order key={el.id} item={el} onDelete={props.onDelete} />;
      })}
      <p className="summa">
        Загальна вартість : {new Intl.NumberFormat().format(summa)}
      </p>
    </div>
  );
}
function showNothing(props) {
  return <div className="empty">Товарів в корзині немає</div>;
}
export default function Header(props) {
  const [cartOpen, setCartOpen] = useState(false);
  return (
    <header>
      <div>
        <span className="logo">House Staff</span>
        <ul className="nav">
          <li>Про нас</li>
          <li>Контакти</li>
          <li>Профіль</li>
        </ul>
        <FaShoppingCart
          className={`shop-cart-buton ${cartOpen && "active"}`}
          onClick={() => {
            setCartOpen(!cartOpen);
            console.log(cartOpen);
          }}
        />
        {cartOpen && (
          <div className="shop-cart">
            {props.orders.length > 0 ? showOrders(props) : showNothing()}
          </div>
        )}
      </div>
      <div className="presentation"></div>
    </header>
  );
}
