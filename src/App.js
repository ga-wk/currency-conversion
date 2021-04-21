import PageConverter from "./pages/PageConverter";
import PageCurrency  from "./pages/PageCurrency";

import './styles/scaffolding.scss'
import store from "./redux/store";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={PageConverter} />
          <Route path="/currency" exact component={PageCurrency} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
