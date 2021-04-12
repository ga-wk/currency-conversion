import { PageConverter } from "./pages/PageConverter";
import { PageCurrency } from "./pages/PageCurrency";

import { BrowserRouter, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={PageConverter} />
        <Route path="/currency" exact component={PageCurrency} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
