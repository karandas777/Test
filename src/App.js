import React from 'react';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import Tasks from './pages/Tasks';
import User from './pages/User';
import Login from './pages/Login';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
        <Router>
            <Switch>
              <PrivateRoute exact path="/" component={Home} />
              <PrivateRoute exact path="/tasks" component={Tasks} />
              <PrivateRoute exact path="/user" component={User} />
              <Route exact path="/login" component={Login} />
            </Switch>
        </Router>
  );
}

export default App;
