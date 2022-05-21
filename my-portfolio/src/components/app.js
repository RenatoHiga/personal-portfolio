import { h } from "preact";
import { Router } from "preact-router";

import WhoAmI from "./sections/who-am-i/who-am-i";

// Code-splitting is automated for `routes` directory
import Home from "../routes/home";
import Profile from "../routes/profile";

const App = () => (
  <div id="app">
    <WhoAmI />
  </div>
);

export default App;
