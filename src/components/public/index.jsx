import store from "../../redux/store";

export const listCurrency = () => {
  const valute = store.getState().currency.currency.Valute;

  let options = [];
  for (let key in valute) {
    options.push(
      <option key={key} value={valute[key].Name}>
        {valute[key].Name}
      </option>
    );
  }

  options.push(
    <option key={"RUS"} value="Российский рубль">
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
