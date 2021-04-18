import React, { useState } from "react";
import store from "../../redux/store";
import { listCurrency } from "../public";

import "./index.scss";

export const Convert = () => {
  const [currency] = useState (
    store.getState().defaultCurrency.defaultCurrency
  );

  let today = new Date(Date.now());

  const monthNames = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
  ];

  return (
    <div className="convert">
      <p className="convert__title">
        1 Российский рубль равно
        <span className="text--bold"> 0,013 Доллар США</span>
      </p>
      <p className="convert__reject">
        {`${today.getUTCDate()} ${
          monthNames[today.getUTCMonth()]
        }, ${today.getUTCHours()}:${today.getUTCMinutes()} UTC Отказ от обязательств`}
      </p>
      <section className="convert__inputs">
        <select
          className="convert__select-from"
          name="from"
          defaultValue={localStorage.getItem("cur")}
        >
          {listCurrency(currency)}
        </select>
        <select
          className="convert__select-to"
          name="to"
          defaultValue="Доллар США"
        >
          {listCurrency('USD')}
        </select>
        <input className="convert__input-from" type="text" />
        <input className="convert__input-to" type="text" readOnly={true} />
      </section>
    </div>
  );
};
