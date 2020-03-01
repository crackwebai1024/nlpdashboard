import React from "react";
import { Route } from "react-router-dom";
import Hoc from "./hoc/hoc";

import Login from "./containers/Login";
import Signup from "./containers/Signup";
import HomepageLayout from "./containers/Home";
import NlpDashboard from "./containers/NLPDashboard";
import NlpProcessing from "./containers/NLPProcessing";

const BaseRouter = () => (
  <Hoc>
    <Route path="/login" component={Login} />
    <Route path="/signup" component={Signup} />
    <Route exact path="/" component={HomepageLayout} />
    <Route path="/nlpdashboard" component={NlpDashboard} />
    <Route path="/nlpprocessing" component={NlpProcessing} />
  </Hoc>
);

export default BaseRouter;
