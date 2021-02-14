import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./views/Home";
import SongDetails from "./views/SongDetails";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/lyrics">
          <SongDetails />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
