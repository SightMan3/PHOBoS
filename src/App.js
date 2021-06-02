import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Welcome from "./components/welcome";

import Wallmart from "./components/wallmart";
import Category from "./components/category";
import SummaryScreen from "./components/SummaryScreen";

import Spacechoose from './components/Spacechoose'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Welcome}/>

          <Route path="/wallmart" component={Wallmart}/>
          <Route path="/category" component={Category} />
          <Route path="/summary" component={SummaryScreen} />
          <Route path="/flightpickup" exact component={Spacechoose}/>

        </Switch>
      </Router>

      {/*<Wallmart />*/}
    </div>
  );
}

export default App;
