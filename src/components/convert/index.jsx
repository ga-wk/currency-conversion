import React from "react";

import "./index.scss";

export const Convert = (props) => {
  let today = new Date()
  const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
  return (<div className="convert">
  <p className="convert__title">
      1 Российский рубль равно
    <span className="text--bolt"> 0,013 Доллар США</span>
  </p>
  <p className="convert__reject">
    {`${today.getUTCDay()} ${monthNames[today.getUTCMonth()]}., ${today.getUTCHours()}:${today.getUTCMinutes()} UTC Отказ от обязательств`}
  </p>
  <section className="convert__inputs">
    <select className="convert__from" name="" id="">

    </select>
    <select className="convert__to" name="" id="">
      
    </select>
    <input type="text"/>
    <input type="text" readOnly={true}/>
  </section>
</div>);
};
