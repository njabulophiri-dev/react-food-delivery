import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./OrderSuccess.css";

const REDIRECT_TIME = 20;

const OrderSuccess = () => {
  const [order, setOrder] = useState(null);
  const [countdown, setCountdown] = useState(REDIRECT_TIME);
  const navigate = useNavigate();

  useEffect(() => {
    const storedOrder = localStorage.getItem("lastOrder");

    if (!storedOrder) {
      navigate("/", { replace: true });
      return;
    }

    try {
      setOrder(JSON.parse(storedOrder));
    } catch {
      navigate("/", { replace: true });
      return;
    }

    // Countdown interval
    const interval = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    const timeout = setTimeout(() => {
      localStorage.removeItem("lastOrder");
      navigate("/", { replace: true });
    }, REDIRECT_TIME * 1000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [navigate]);

  if (!order) {
    return (
      <div className="order-success loading">
        <p>Finalizing your order...</p>
      </div>
    );
  }

  return (
    <div className="order-success">
      <div className="order-success-card">
        <div className="success-icon">✓</div>

        <h2>Order Confirmed</h2>
        <p>Your food is being prepared and will be delivered shortly.</p>

        <div className="order-summary">
          <p><strong>Order ID:</strong> {order.orderId}</p>
          <p><strong>Total:</strong> R {order.total}</p>
        </div>

        <p className="redirect-note">
          You’ll automatically be redirected <strong>{countdown}</strong> seconds
        </p>

        <Link to="/" className="success-btn">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default OrderSuccess;
