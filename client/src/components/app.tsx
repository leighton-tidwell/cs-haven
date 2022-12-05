import { h } from "preact";
import { Route, Router } from "preact-router";

import Header from "./header";

// Code-splitting is automated for `routes` directory
import Home from "../routes/home";
import Vip from "../routes/vip";

const App = () => (
  <div id="app">
    <Header />
    <Router>
      <Route path="/" component={Home} />
      <Route path="/vip" component={Vip} />
    </Router>
  </div>
);

export default App;
