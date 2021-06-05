import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import SignInPage from "./Pages/SignInPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact >
          <SignInPage />
      </Route>
      </Switch>
    </Router>
  );
}

export default App;
