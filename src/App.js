import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./views/Home";
import CurrentSongDetails from "./views/CurrentSongDetails";
import SavedSongsDetails from "./views/SavedSongDetails";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/lyrics">
          <CurrentSongDetails />
        </Route>
        <Route path="/saved/:id">
          <SavedSongsDetails />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
