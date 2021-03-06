import React, { Component, } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import SignUp from './components/pages/SignUp/SignUp';
import { AuthProvider } from "./context/authContext";
import Home from "./components/pages/Home/Home";
import Login from './components/pages/Login/Login';
import Profile from './components/pages/Profile/Profile';
import Events from './components/pages/Events/Events';
import Host from './components/pages/Host/Host';
import Past from './components/pages/Past/Past';
import PrivateRoute from "./privateRoute";

export class App extends Component {
  render() {
    return (
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={SignUp} />
            <PrivateRoute exact path="/profile" component={Profile} />
            <PrivateRoute exact path="/events" component={Events} />
            <PrivateRoute exact path="/host" component={Host} />
            <PrivateRoute exact path="/past" component={Past} />
          </Switch>
        </Router>
      </AuthProvider>
    );
  }
}
export default App;