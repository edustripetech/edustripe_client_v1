import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './views/Home';
import Login from './views/Authentication/Login';
import Signup from './views/Authentication/Signup';
import ParentSignup from './views/Authentication/ParentSignup';
import StudentSignup from './views/Authentication/StudentSignup';

import './main.css';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/login' exact component={Login} />
          <Route path='/signup' exact component={Signup} />
          <Route path='/parent-signup' exact component={ParentSignup} />
          <Route path='/student-signup' exact component={StudentSignup} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
