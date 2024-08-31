import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context"; // curr user context

import Admin from "layouts/Admin.js";
import Auth from "layouts/Auth.js";

// views without layouts

import Landing from "views/Landing.js";
import Profile from "views/Profile.js";
//import Index from "views/Index.js";

export default function App() {
  const { user } = useContext(Context);
  console.log("User ====>", user);
  return (
    <BrowserRouter>
      <Switch>
        {/* add routes with layouts */}
        {/* <Redirect from="/" to="/auth" /> */}
        <Route exact path="/" component={Auth} />
        <Route path="/admin" component={Admin} />
        <Route path="/auth" component={Auth} />
        {/* add routes without layouts */}
        <Route path="/landing" exact component={Landing} />
        <Route path="/profile" exact component={Profile} />
        {/* <Route path="/" exact component={Index} /> */}
        {/* add redirect for first page */}
        <Redirect from="*" to="/" />
      </Switch>
    </BrowserRouter>
  );
}
