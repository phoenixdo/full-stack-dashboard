import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route
} from "react-router-dom";
import "./App.css";
import { MuiThemeProvider } from "@material-ui/core/styles";
import NavBar from "./components/NavBar/NavBar";
import LoginView from "./pages/Login/LoginView";
import NotFound from "./pages/404/NotFound";
import Theme from "./theme/Theme";

function App() {
  return (
    <MuiThemeProvider theme={Theme}>
      <Router>
        <NavBar />
        <Switch>
          <Redirect exact from="/" to="/login" />
          <Route path="/login">
            <LoginView />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </MuiThemeProvider>
  );
}

export default App;
