import React, { useRef, useState } from "react";
import { setDefaultCurrency } from "../../redux/defaultCurrency/actions";
import store from "../../redux/store";
import { listCurrency } from "../public";

import "./index.scss";

export const Header = () => {
  const nav = useRef(null);
  const sub = useRef(null);
  const wrapper = useRef(null);
  const header = useRef(null);

  const [valute] = useState(store.getState().currency.currency.Valute);
  const [currency, setСurrency] = useState(
    store.getState().defaultCurrency.defaultCurrency
  );

  //Изменение начальной валюты
  const saveDefaultCurrency = (e) => {
    e.preventDefault();
    localStorage.setItem("cur", e.target.value);
    setСurrency(e.target.value);
    store.dispatch(setDefaultCurrency(e.target.value));
    console.log(currency);
  };

  //Анимация меню навигации
  const handleNavMenu = (e) => {
    e.preventDefault();

    if (!sub.current.classList.contains("close-sub")) {
      sub.current.classList.add("close-sub");
      nav.current.classList.toggle("close-nav");
      return true;
    }

    wrapper.current.classList.toggle("hidden");
    nav.current.classList.toggle("close-nav");
    return true;
  };

  //Анимация меню настроек
  const handleSubMenu = (e) => {
    e.preventDefault();

    if (!nav.current.classList.contains("close-nav")) {
      nav.current.classList.add("close-nav");
      sub.current.classList.toggle("close-sub");
      return true;
    }

    wrapper.current.classList.toggle("hidden");
    sub.current.classList.toggle("close-sub");
    return true;
  };

  //Анимация закрытия всех меню 
  const handleCloseAllMenu = (e) => {
    e.preventDefault();
    nav.current.classList.add("close-nav");
    wrapper.current.classList.add("hidden");
    sub.current.classList.add("close-sub");
    return true;
  };

  // header прокручивается вместе со страницей 
  window.addEventListener("scroll", function () {
    if (header.current) {
      if (this.scrollY > 1) {
        header.current.classList.add("header-fixed");
        nav.current.classList.add("header-scroll");
        sub.current.classList.add("header-scroll");
        wrapper.current.classList.add("header-scroll");
      } else {
        header.current.classList.remove("header-fixed");
        nav.current.classList.remove("header-scroll");
        sub.current.classList.remove("header-scroll");
        wrapper.current.classList.remove("header-scroll");
      }
      return false;
    }
  });
  return (
    <>
      <header className="header" ref={header}>
        <ul className="header__btns">
          <li className="btns__nav">
            <button
              className="btn"
              data-testid="btn-nav"
              onClick={handleNavMenu}
            >
              <span className="hidden">Меню навигации</span>
              <div data-testid="nav" className="nav-burger">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
              </div>
            </button>
          </li>
          <li className="btns__sub">
            <button
              className="btn"
              data-testid="btn-sub"
              onClick={handleSubMenu}
            >
              <span className="hidden">Настройки</span>
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                data-testid="svg-sub"
              >
                <g opacity="0.8">
                  <path
                    d="M24.2509 15.2396L21.953 13.4427C21.9822 13.1656 22.0072 12.8417 22.0072 12.499C22.0072 12.1562 21.9832 11.8323 21.953 11.5552L24.253 9.75732C24.6801 9.41982 24.7968 8.82085 24.5249 8.32192L22.1353 4.1875C21.8801 3.72085 21.3207 3.48125 20.753 3.69062L18.0415 4.77915C17.5218 4.40415 16.9769 4.0875 16.4134 3.83437L16.0009 0.95835C15.9332 0.4125 15.4582 0 14.8968 0H10.1051C9.54364 0 9.06971 0.4125 9.00301 0.95L8.58949 3.83647C8.04364 4.08232 7.50721 4.39482 6.96449 4.78125L4.24574 3.6896C3.73632 3.49272 3.12694 3.71353 2.87382 4.17812L0.481139 8.31772C0.198864 8.79482 0.315514 9.4146 0.751989 9.76045L3.04989 11.5573C3.01341 11.9083 2.99574 12.2136 2.99574 12.5C2.99574 12.7865 3.01346 13.0917 3.04989 13.4438L0.749889 15.2417C0.32279 15.5802 0.207165 16.1792 0.47904 16.6771L2.86864 20.8115C3.12386 21.2771 3.67801 21.5187 4.25091 21.3083L6.96239 20.2198C7.48114 20.5938 8.02591 20.9104 8.58949 21.1646L9.00199 24.0396C9.06966 24.5875 9.54364 25 10.1061 25H14.8978C15.4593 25 15.9343 24.5875 16.0009 24.05L16.4144 21.1646C16.9603 20.9177 17.4957 20.6062 18.0394 20.2188L20.7582 21.3104C20.8894 21.3614 21.0259 21.3875 21.1665 21.3875C21.5707 21.3875 21.9426 21.1667 22.1301 20.8229L24.5301 16.6667C24.7968 16.1792 24.6801 15.5802 24.2509 15.2396ZM12.5009 16.6667C10.203 16.6667 8.33426 14.7979 8.33426 12.5C8.33426 10.2021 10.203 8.33335 12.5009 8.33335C14.7988 8.33335 16.6676 10.2021 16.6676 12.5C16.6676 14.7979 14.7988 16.6667 12.5009 16.6667Z"
                    fill="#222232"
                  />
                </g>
              </svg>
            </button>
          </li>
        </ul>
      </header>

      <div className="nav-menu close-nav" ref={nav}>
        <ul className="nav-menu__list">
          <li className="list__item">
            <a href="/" className="list__item-link">
              Конвертер валюты
            </a>
          </li>
          <li className="list__item">
            <a href="/currency" className="list__item-link">
              Курсы валют
            </a>
          </li>
        </ul>
      </div>

      <div className="sub-menu close-sub" ref={sub}>
        <ul className="sub-menu__list">
          <li className="list__item">
            <p className="list__item-block">
              <label className="text" htmlFor="select-currency">
                Валюта по умолчанию:
              </label>
              <select
                className="selector"
                data-testid="selector"
                id="select-currency"
                onChange={saveDefaultCurrency}
                defaultValue={currency}
              >
                {listCurrency(valute)}
              </select>
            </p>
          </li>
        </ul>
      </div>

      <div className="wrapper hidden" ref={wrapper} onClick={handleCloseAllMenu}></div>
    </>
  );
};
