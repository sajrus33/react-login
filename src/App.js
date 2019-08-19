import React,{Component} from "react";
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import Home from "./components/Home"
import Profile from "./components/Profile"


class App extends Component {
  

  render(){
    return (
      <Router>
        <div>
          <Route  path="/" exact component={Home} />
          <Route  path="/profile/" component={Profile} />
        </div>
      </Router>
    );
  }
  
}

export default App;