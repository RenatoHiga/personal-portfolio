import { h } from "preact";
import { Router } from "preact-router";

import WhoAmI from "./sections/who-am-i/who-am-i";
import MoreAboutMyself from "./sections/more-about-myself/more-about-myself";
import PersonalProjects from "./sections/personal-projects/personal-projects";

// Code-splitting is automated for `routes` directory
import Home from "../routes/home";
import Profile from "../routes/profile";

const App = () => (
  <div id="app">
    <WhoAmI />
    <MoreAboutMyself />
    <PersonalProjects />
  </div>
);

export default App;
