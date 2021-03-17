import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import WebcamCapture from "./WebcamCapture";
import Preview from "./Preview";
import Chats from "./Chats";
import ChatView from "./ChatView";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "./features/appSlice";
import Login from "./Login";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <div className="app__body">
            <Switch>
              <Route exact path="/" component={WebcamCapture} />
              <Route exact path="/preview" component={Preview} />
              <Route exact path="/chats" component={Chats} />
              <Route exact path="/chats/view" component={ChatView} />
            </Switch>
          </div>
        )}
      </Router>
    </div>
  );
}

export default App;
