import React, { useRef, useState } from "react";
import store from "../../redux/store";
import { listCurrency } from "../public";

import "./index.scss";

export const convertFromXToX = (from, to, fromValue) => {
  const valute = store.getState().currency.currency.Valute;
  let toValue = 0;

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
  const from = useRef({
    value: store.getState().defaultCurrency.defaultCurrency,
  });
  const to = useRef({ value: "USD" });
  const fromValue = useRef(null);

  const [valute] = useState(store.getState().currency.currency.Valute);
  const [toValue, setToValue] = useState(
    convertFromXToX(from.current.value, to.current.value, 1)
  );

  const handleConvert = () => {
    setToValue(
      convertFromXToX(
        from.current.value,
        to.current.value,
        fromValue.current.value
      )
    );
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
        {`1 ${
          from.current.value === "RUS"
            ? "Российский рубль"
            : valute[from.current.value].Name
        } равно `}

        <span className="text--bold">{`${convertFromXToX(
          from.current.value,
          to.current.value,
          1
        )} ${
          to.current.value === "RUS"
            ? "Российский рубль"
            : valute[to.current.value].Name
        }`}</span>
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
          defaultValue={from.current.value}
          onChange={handleConvert}
          ref={from}
        >
          {listCurrency(valute)}
        </select>
        <select
          className="convert__select-to"
          name="to"
          defaultValue={to.current.value}
          onChange={handleConvert}
          ref={to}
        >
          {listCurrency(valute)}
        </select>
        <input
          className="convert__input-from"
          type="text"
          defaultValue="1"
          onChange={handleConvert}
          ref={fromValue}
        />
        <input
          className="convert__input-to"
          type="text"
          disabled={true}
          defaultValue={toValue}
          value={toValue}
        />
      </section>
    </div>
  );
};
