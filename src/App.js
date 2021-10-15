import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Jobs from "./components/jobs/Jobs";
import Messaging from "./components/messaging/Messaging";
import MyNetwork from "./components/mynetwork/MyNetwork";
import Navbar from "./components/navbar/Navbar";
import Notifications from "./components/notifications/Notifications";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { selectName } from "./slices/userSlice";

function App() {
  const Name = useSelector(selectName);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [name, setName] = useState(Name);
  useEffect(() => {
    console.log({ name });
  }, [name]);
  return (
    <Router>
      <div className="App">
        {window.location.pathname !== "/login" && <Navbar />}
      </div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/feed" component={Home} />
        <Route path="/mynetwork" component={MyNetwork} />
        <Route path="/jobs" component={Jobs} />
        <Route path="/messaging" component={Messaging} />
        <Route path="/notifications" component={Notifications} />
        <Route path="/login" component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
