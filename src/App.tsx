import Router, { Route } from "preact-router";
import Home from "./Home";

function App() {
  return (
    <Router>
      <Route path="/" component={Home} />
    </Router>
  );
}

export default App;
