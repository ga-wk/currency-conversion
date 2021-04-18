import store from "../../redux/store";

export const listCurrency = () => {
  const valute = store.getState().currency.currency.Valute;

  let options = [];

  const isSelected = (key) => (valute[key].Name === localStorage.getItem('cur') ? true : false)
  for (let key in valute) {
    options.push(
      <option selected={isSelected(key)} key={key} value={key}>
        {valute[key].Name}
      </option>
    );
  }

  options.push(
    <option selected={'Российский рубль' === localStorage.getItem('cur')} key={"RUS"} value="RUS">
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
