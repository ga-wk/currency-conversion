import React, { useState } from "react";
import store from "../../redux/store";
import { listCurrency } from "../public";

import "./index.scss";

export const convertFromXToX = (from, to, fromValue) => {
  const valute = store.getState().currency.currency.Valute;
  let toValue = 0;
  console.log(valute);
  if (from === to) {
    return 1;
  }

  if (from === "RUS") {
    toValue =
      (Number(valute[to].Nominal) / Number(valute[to].Value)) *
      Number(fromValue);
    return toValue;
  }

  if (to === "RUS") {
    toValue =
      (Number(valute[from].Value) / Number(valute[from].Nominal)) *
      Number(fromValue);
    return toValue;
  }

  let rus = convertFromXToX(from, "RUS", fromValue);
  toValue = convertFromXToX("RUS", to, rus);
  return toValue;
};

export const Convert = () => {
  const [currency] = useState(store.getState().defaultCurrency.defaultCurrency);

  const [toValue, setToValue] = useState(convertFromXToX(currency, "USD", 1));

  const handleConvert = () => {
    const from = document.querySelector(".convert__select-from").value;
    const to = document.querySelector(".convert__select-to").value;
    const fromValue = document.querySelector(".convert__input-from").value;
    setToValue(convertFromXToX(from, to, fromValue));
  };

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
          onChange={handleConvert}
        >
          {listCurrency(currency)}
        </select>
        <select
          className="convert__select-to"
          name="to"
          defaultValue="USD"
          onChange={handleConvert}
        >
          {listCurrency("USD")}
        </select>
        <input
          className="convert__input-from"
          type="text"
          defaultValue="1"
          onChange={handleConvert}
        />
        <input
          className="convert__input-to"
          type="text"
          readOnly={true}
          defaultValue={toValue}
          value={toValue}
        />
      </section>
    </div>
  );
};
