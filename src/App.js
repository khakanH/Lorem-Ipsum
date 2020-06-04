import React from "react";
import "./assets/scss/app.scss";
import { Row, Container } from "reactstrap";
import Header from "./components/header";
import State from "./context/state";

import CalculationPage from "./components/CalculationPages";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <State>
      <Router>
        <Switch>
          <Route exact path="/calculation">
            <CalculationPage />
          </Route>
          <Container>
            <Row>
              <Header />
            </Row>
            <CalculationPage />
          </Container>
        </Switch>
      </Router>
    </State>
  );
}
export default App;
