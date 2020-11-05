import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomePage from "./pages/HomePage"
import ChatPage from "./pages/ChatPage"

function App() {
  return (
    <Router>

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/:roomId" component={ChatPage} />
      </Switch>

    </Router>
  );
}

export default App;
