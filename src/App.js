import PageConverter from "./pages/PageConverter";
import PageCurrency from "./pages/PageCurrency";

import store from "./redux/store";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { Header } from "./components/header";
import { Footer } from "./components/footer";

const App = () => {
  return (
    <div className="page">
      <Provider store={store}>
        <Header />
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={PageConverter} />
            <Route path="/currency" exact component={PageCurrency} />
          </Switch>
        </BrowserRouter>
        <Footer />
      </Provider>
    </div>
  );
};

export default App;
