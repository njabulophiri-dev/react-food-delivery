import React, { useContext, useState } from "react";
import "./Payment.css";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const { getFinalAmount, clearCart, cartItems } = useContext(StoreContext);
  const [method, setMethod] = useState("card");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handlePayment = () => {
    setLoading(true);

    const orderId = generateOrderId();

    const orderSummary = {
      orderId,
      total: getFinalAmount(),
      items: cartItems,
      createdAt: new Date().toISOString(),
    };

    localStorage.setItem("lastOrder", JSON.stringify(orderSummary));

    // simulate payment processing
    setTimeout(() => {
      setLoading(false);
      clearCart(); 
      navigate("/order-success");
    }, 1500);
  };

  const generateOrderId = () => {
    return "ORD-" + Date.now().toString(36).toUpperCase();
  };


  return (
    <div className="payment">
      <h2>Payment</h2>

      <div className="payment-container">
        {/* Left */}
        <div className="payment-methods">
          <h3>Select payment method</h3>

          <label>
            <input
              type="radio"
              value="card"
              checked={method === "card"}
              onChange={(e) => setMethod(e.target.value)}
            />
            Credit / Debit Card
          </label>

          <label>
            <input
              type="radio"
              value="cod"
              checked={method === "cod"}
              onChange={(e) => setMethod(e.target.value)}
            />
            Cash on Delivery
          </label>

          {method === "card" && (
            <div className="card-form">
              <input type="text" placeholder="Card number" />
              <input type="text" placeholder="Name on card" />
              <div className="card-row">
                <input type="text" placeholder="MM/YY" />
                <input type="text" placeholder="CVV" />
              </div>
            </div>
          )}
        </div>

        {/* Right */}
        <div className="payment-summary">
          <h3>Order Summary</h3>
          <p>Total amount</p>
          <h2>R {getFinalAmount()}</h2>

          <button onClick={handlePayment} disabled={loading}>
            {loading ? "Processing..." : "Pay Now"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
