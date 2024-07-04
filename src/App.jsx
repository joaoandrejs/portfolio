import { Route, Switch } from "react-router-dom";
import Navbar from './components/Navbar.jsx';
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <main>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path='/projects' component={Projects} />
        <Route component={NotFound} />
      </Switch>
    </main>
  );
}

export default App;
