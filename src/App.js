import "./App.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Welcome from "./components/welcome";

import Wallmart from "./components/wallmart";
import Category from "./components/category";
import SummaryScreen from "./components/SummaryScreen";

import Accsesories from "./components/subComponents/accsesories";

import Form from "./components/Form";
import Spacechoose from "./components/Spacechoose";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Welcome} />
          <Route path="/wallmart" component={Wallmart} />
          <Route path="/category" component={Category} />
          <Route path="/summary" component={SummaryScreen} />
          <Route path="/form" component={Form} />
          <Route path="/flightpickup" exact component={Spacechoose} />
          <Route path="/list" exact component={Accsesories} />
        </Switch>
      </Router>

    </div>
  );
}

export default App;
