import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Welcome from "./components/welcome";
import Spacechoose from './components/Spacechoose'
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Welcome}/>
          <Route path="/flightpickup" exact component={Spacechoose}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
