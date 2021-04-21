import React, { useRef, useState } from "react";
import store from "../../redux/store";
import { listCurrency, monthNames, today } from "../public";

import "./index.scss";

//функция перевода валют
export const convertFromXToX = (from, to, fromValue) => {
  const valute = store.getState().currency.currency.Valute;
  let toValue = 0;

  // обмен один к одному
  if (from === to) {
    return 1;
  }

  // пуревод из рублей
  if (from === "RUS") {
    toValue =
      (Number(valute[to].Nominal) / Number(valute[to].Value)) *
      Number(fromValue);
    return toValue;
  }

  // перевод в рубли
  if (to === "RUS") {
    toValue =
      (Number(valute[from].Value) / Number(valute[from].Nominal)) *
      Number(fromValue);
    return toValue;
  }

  //перевод из любой в любую
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

  // событие срабатывающие при изменение значений валют и при изменении самих валют
  // вызывает функцию по переводу валют
  const handleConvert = () => {
    setToValue(
      convertFromXToX(
        from.current.value,
        to.current.value,
        fromValue.current.value
      )
    );
  };

  return (
    <main className="convert container">
      <h1 className="convert__title">
        {`1 ${
          from.current.value === "RUS"
            ? "Российский рубль"
            : valute[from.current.value].Name
        } равно `}
        <br/>
        <span className="text--bold">{`${convertFromXToX(
          from.current.value,
          to.current.value,
          1
        ).toFixed(5)} ${
          to.current.value === "RUS"
            ? "Российский рубль"
            : valute[to.current.value].Name
        }`}</span>
      </h1>
      <p className="convert__reject">
        {`${today.getUTCDate()} ${
          monthNames[today.getUTCMonth()]
        }, ${today.getUTCHours()}:${today.getUTCMinutes()} UTC Отказ от обязательств`}
      </p>
      <article className="convert__inputs">
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
          type="number"
          defaultValue="1"
          onChange={handleConvert}
          ref={fromValue}
        />
        <input
          className="convert__input-to"
          type="number"
          disabled={true}
          value={toValue.toFixed(5)}
        />
      </article>
    </main>
  );
};
