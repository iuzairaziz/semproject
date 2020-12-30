import logo from "./logo.svg";
import "./App.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import AdForm from "./components/AdForm";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/register" component={SignUp} />
          <Route path="/login" component={SignIn} />
          <Route path="/aboutus" component={AboutUs} />
          <Route path="/adform" component={AdForm} />
          <Route path="/" component={Home} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
