import React, { useState } from "react";
import store from "../../redux/store";
import { monthNames, today } from "../public";
import "./index.scss";

export const generateTable = (valute, width) => {
  const isWidth = (minWidth, tag1, tag2) => {
    return width > minWidth ? tag1 : tag2;
  };
  let rows = [];

  rows.push(
    <tr className="table__head">
      <th>Код</th>
      <th>Валюта</th>
      <th>Кол-во</th>
      <th>Курс</th>
      {isWidth(700, <th>Изменение</th>, null)}
    </tr>
  );

  for (const key in valute) {
    let change = String(valute[key].Value - valute[key].Previous).slice(0, 4);
    rows.push(
      <tr className="table__body">
        <td>{valute[key].CharCode}</td>
        <td>{valute[key].Name}</td>
        <td>{valute[key].Nominal}</td>
        <td>{valute[key].Value}</td>
        {isWidth(
          700,
          <td
            className={
              valute[key].Value - valute[key].Previous < 0
                ? "red"
                : valute[key].Value - valute[key].Previous === 0
                ? ""
                : "green"
            }
          >
            {valute[key].Value - valute[key].Previous < 0
              ? `-${change}`
              : valute[key].Value - valute[key].Previous === 0
              ? change
              : `+${change}`}
          </td>
        )}
      </tr>
    );
  }

  return rows;
};

const CurrencyTable = () => {
  const [width, setWidth] = useState(document.documentElement.scrollWidth);
  const [valute] = useState(store.getState().currency.currency.Valute);

  const updateDimensions = () => {
    setWidth(document.documentElement.scrollWidth);
  };

  window.addEventListener("resize", updateDimensions);

  return (
    <table className="currency__table container">
      {generateTable(valute, width)}
    </table>
  );
};

export const Currency = () => {
  return (
    <main className="currency container">
      <h1 className="currency__title">{`ЦБ РФ - Банк России - курсы всех валют на ${today.getUTCDate()} ${
        monthNames[today.getUTCMonth()]
      }, ${today.getUTCFullYear()} года`}</h1>

      <CurrencyTable />
    </main>
  );
};
