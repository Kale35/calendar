import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import SignInPage from "./Pages/SignInPage";
import SignUpPage from "./Pages/SignUpPage";
import CalendarPage from './Pages/CalendarPage';
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact >
          <CalendarPage />
        </Route>
        <Route path="/signup">
          <SignUpPage />
        </Route>
        <Route path="/signin">
          <SignInPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
