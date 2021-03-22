import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import NoFound from './components/NoFound/NoFound';
import LeagueInfo from './components/LeagueInfo/LeagueInfo';
import CopyRight from './components/CopyRight/CopyRight';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/league/:idLeague">
            <LeagueInfo></LeagueInfo>
          </Route>
          <Route path="*" component={NoFound}>
            <NoFound />
          </Route>
        </Switch>
      </Router>
      <CopyRight></CopyRight>
    </div>
  );
}

export default App;
