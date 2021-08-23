import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import DiyHome from "./Components/DiyHome/DiyHome";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <DiyHome />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
