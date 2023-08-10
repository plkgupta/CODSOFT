import NavBar from "./navbar/NavBar";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Resume from "./pages/resume/Resume";
import Contact from "./pages/contact/Contact";
import Create from "./pages/create/Create";
import Update from "./pages/update/Update";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About/>
        </Route>
        <Route path="/resume">
          <Resume/>
        </Route>
        <Route path="/contact">
          <Contact/>
        </Route>
        <Route path="/create">
          <Create/>
        </Route>
        <Route path="/update">
          <Update/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
