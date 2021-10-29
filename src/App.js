import React, { createContext, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DiyHome from "./Components/DiyHome/DiyHome";

export const UserContext = createContext();

function App() {
  const [textFieldData, setTextFieldData] = useState({});

  return (
    <UserContext.Provider value={[textFieldData, setTextFieldData]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <DiyHome />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
