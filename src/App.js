import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import SignInPage from "./Pages/SignInPage";
import SignUpPage from "./Pages/SignUpPage";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact >
          <SignInPage />
      </Route>
      <Route path="/signup">
        <SignUpPage/>
      </Route>
      </Switch>
    </Router>
  );
}

export default App;
