import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import NotFound from "./components/pages/NotFound/NotFound";
import MenuBar from "./components/include/MenuBar/MenuBar";
import Login from "./components/pages/Login/Login";
import Test from "./components/pages/Test/Test";
import AuthProvider from "./context/AuthProvider";
import PrivateRoute from "./private/PrivateRoute";

function App() {
  return (
    <div className="app">
      <AuthProvider>
        <Router>
          <MenuBar></MenuBar>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <PrivateRoute exact path="/test">
              <Test />
            </PrivateRoute>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
