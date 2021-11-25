import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal.js";

function Checkout(props) {
  const [{ basket }] = useStateValue();
  return (
    <div className="checkout">
      <div class="checkout__left">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._C8423492668_.jpg"
          alt=""
          class="checkout__ad"
        />
        <div>
          <h2 class="checkout__title"> Your shopping Basket</h2>
          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
          {/* CHECKOUTPRODUCTS*/}
        </div>
      </div>

      <div class="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}
export default Checkout;
