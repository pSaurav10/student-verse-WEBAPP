import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./css/style.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import LogIn from "./pages/Login";
import SignUp from "./pages/Signup";
import UserProfile from "./pages/Profile";
import Home from "./pages/Home";
import Layout from "./Layout/Layout";

function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Switch>
            <Route path="/login" component={LogIn} exact />
            <Route path="/signup" component={SignUp} exact />
            <Route path="/profile" component={UserProfile} exact />
            <Route path="/" component={Home} exact />
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
