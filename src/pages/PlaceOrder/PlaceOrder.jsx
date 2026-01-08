import React, { useContext } from "react";
import "./PlaceOrder.css";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";


const PlaceOrder = () => {
  const { getTotalCartAmount, getDeliveryFee, getFinalAmount} = useContext(StoreContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
  e.preventDefault();

    if (getTotalCartAmount() === 0) {
      navigate("/cart");
      return;
    }

    navigate("/payment");
};


  

  return (
    <form className="place-order" onSubmit={handleSubmit}>
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder="First name" />
          <input type="text" placeholder="Last name" />
        </div>
        <input type="email" placeholder="Email address" />
        <input type="text" placeholder="Street address" />
        <div className="multi-fields">
          <input type="text" placeholder="City" />
          <input type="text" placeholder="Suburb" />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder="Postal code" />
          <input type="text" placeholder="Province" />
        </div>
        <input type="text" placeholder="Phone" />
      </div>
      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>R {getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>R {getDeliveryFee()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>R {getFinalAmount()} </b>
            </div>
          </div>
          <button type="submit" disabled={getTotalCartAmount() === 0}>
            PROCEED TO PAYMENT
          </button>

        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
