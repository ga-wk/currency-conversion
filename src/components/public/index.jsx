/**
 * Возвращает массив options, c названиями валют из массива валют.
 *
 * @param {array} valute,массив валют
 * @return {array} [...options] - массив тегов "option value="Сокращенное название">Название валюты</option"
 */
export const listCurrency = (valute) => {
  let options = [];

  for (let key in valute) {
    options.push(
      <option key={key} value={key}>
        {valute[key].Name}
      </option>
    );
  }

  //в массиве нет российских рублей
  options.push(
    <option key={"RUS"} value="RUS">
      Российский рубль
    </option>
  );

  options.sort((a, b) => {
    if (a.props.value > b.props.value) {
      return 1;
    }
    if (a.props.value < b.props.value) {
      return -1;
    }
    return 0;
  });

  return options;
};

export const today = new Date(Date.now());

export const monthNames = [
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
