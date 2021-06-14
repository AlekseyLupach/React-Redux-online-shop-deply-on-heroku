import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { bubble as Menu } from "react-burger-menu";
import Button from "./Button.jsx";

function Header() {
  const { totalPrice, itemsCount } = useSelector(({ cart }) => ({
    totalPrice: cart.totalPrice,
    itemsCount: cart.itemsCount,
  }));
  const [menuOpen, setMenuOpen] = React.useState(false);
  const handleStateChange = (state) => {
    setMenuOpen(state.isOpen);
  };
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <Menu
        isOpen={menuOpen}
        onStateChange={(state) => handleStateChange(state)}
      >
        <Link
          to="/"
          onClick={() => {
            closeMenu();
          }}
          className="nav__link"
        >
          Главная
        </Link>
        <Link
          to="/catalog"
          onClick={() => {
            closeMenu();
          }}
          className="nav__link"
        >
          Каталог товаров
        </Link>
        <Link
          to={{ pathname: "/", hash: "#about-us" }}
          onClick={() => {
            closeMenu();
          }}
          className="nav__link"
        >
          О нас
        </Link>
        <Link
          to={{ pathname: "/", hash: "#advantages-cards" }}
          onClick={() => {
            closeMenu();
          }}
          className="nav__link"
        >
          Услуги
        </Link>
        <Link
          to={{ pathname: "/", hash: "#contacts" }}
          onClick={() => {
            closeMenu();
          }}
          className="nav__link"
        >
          Контакты
        </Link>
      </Menu>
      <div className="container header__wrapper">
        <h3 className="header__logo">
          <Link to="/">
            A-Store | <i className="fa fa-apple"></i>
          </Link>
        </h3>

        <nav className="header__nav nav" id="navigation-menu">
          <ul className="nav__list">
            <li className="nav__item">
              <Link to="/" className="nav__link">
                Главная
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/catalog" className="nav__link">
                Каталог товаров
              </Link>
            </li>
            <li className="nav__item">
              <a href="/#about-us" className="nav__link">
                О нас
              </a>
            </li>
            <li className="nav__item">
              <a href="/#advantages-cards" className="nav__link">
                Услуги
              </a>
            </li>
            <li className="nav__item">
              <a href="/#contacts" className="nav__link">
                Контакты
              </a>
            </li>
          </ul>
        </nav>
        <div className="header__cart">
          <Link to="/cart">
            <Button className="cart__text">
              <span className="cart__quantity-price">{totalPrice} BYN</span>
              <div className="button__delimiter"></div>
              <i className="fa fa-shopping-cart"></i>
              <span className="cart__quantity">{itemsCount}</span>
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
