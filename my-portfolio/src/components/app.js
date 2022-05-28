import { h } from "preact";
import { Router } from "preact-router";

import WhoAmI from "./sections/who-am-i/who-am-i";
import MoreAboutMyself from "./sections/more-about-myself/more-about-myself";
import PersonalProjects from "./sections/personal-projects/personal-projects";
import ProfessionalExperience from "./sections/professional-experience/professional-experience";
import SocialMedia from "./sections/social-media/social-media";

// Code-splitting is automated for `routes` directory
import Home from "../routes/home";
import Profile from "../routes/profile";

const App = () => (
  <div id="app">
    <WhoAmI />
    <MoreAboutMyself />
    <PersonalProjects />
    <ProfessionalExperience />
    <SocialMedia />
  </div>
);

export default App;
