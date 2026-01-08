import React, { useContext, useState, useRef, useEffect } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const dropdownRef = useRef(null);


  const { getTotalCartAmount } = useContext(StoreContext);

  const handleLoginClick = () => {
    setShowMobileMenu(false);
    setShowLogin(true);
  };

  useEffect(() => {
  const handleClickOutside = (event) => {
    if (
      showMobileMenu &&
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target)
    ) {
      setShowMobileMenu(false);
    }
  };

  document.addEventListener("mousedown", handleClickOutside);

  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, [showMobileMenu]);


  return (
    <>
      <div className="navbar">
        <Link to="/">
          <img src={assets.logo} alt="" className="logo" />
        </Link>

        <ul className="navbar-menu">
          <Link to="/" onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>
            Home
          </Link>
          <Link to="/menu" onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>
            Menu
          </Link>
          <Link to="/download" onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>
            Mobile App
          </Link>
          <Link to="/contact" onClick={() => setMenu("contact")} className={menu === "contact" ? "active" : ""}>
            Get In Touch
          </Link>
        </ul>

        <div className="navbar-right">
          <img src={assets.search_icon} alt="" />

          <div className="navbar-search-icon">
            <Link to="/cart">
              <img src={assets.basket_icon} alt="" />
            </Link>
            <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
          </div>

          <button className="desktop-login" onClick={() => setShowLogin(true)}>
            Login
          </button>

          {/* Hamburger */}
          <div
            className={`hamburger ${showMobileMenu ? "open" : ""}`}
            onClick={() => setShowMobileMenu(prev => !prev)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>

      {/* Mobile Menu Popup */}
      {showMobileMenu && (
        <div className="mobile-dropdown" ref={dropdownRef}>
          <Link to="/" onClick={() => setShowMobileMenu(false)}>Home</Link>
          <Link to="/menu" onClick={() => setShowMobileMenu(false)}>Menu</Link>
          <Link to="/download" onClick={() => setShowMobileMenu(false)}>Mobile App</Link>
          <Link to="/cart" onClick={() => setShowMobileMenu(false)}>Cart</Link>
          <Link to="/contact" onClick={() => setShowMobileMenu(false)}>Get In Touch</Link>

          <button
            className="mobile-dropdown-login"
            onClick={handleLoginClick}
          >
            Login
          </button>
        </div>
      )}

    </>
  );
};

export default Navbar;
