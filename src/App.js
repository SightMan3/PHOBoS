import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Welcome from "./components/welcome";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Welcome}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
