import Router, { Route } from "preact-router";
import Home from "./routes/Home";

function App() {
  return (
    <Router>
      <Route path="/" component={Home} />
    </Router>
  );
}

export default App;
