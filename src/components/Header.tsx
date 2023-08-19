import React from "react";
import exit from "../img/exit-svgrepo-com.svg";
import burger from "../img/burger-list-menu-navigation-svgrepo-com.svg";
import "../style/Header.css";
function Header() {
  return (
    <header className="header">
      <div className="header__conteiner">
        <div className="header-logo">
          <a href="#">Билеты и абонементы</a>
        </div>
        <nav className="header__nav">
          <ul className="header__ul">
            <li>
              <a href="#">Что купить?</a>
            </li>
            <li>
              <a href="#">Правила</a>
            </li>
            <li>
              <a href="#">Возврать билетов</a>
            </li>
          </ul>
        </nav>
        <div className="header-btn">
          <div className="header-btn__exit">
            <img src={exit} alt="" />
            Войти
          </div>
          <div className="header-btn__burger">
            <img src={burger} alt="" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
