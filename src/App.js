import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './views/Home';
import Login from './views/Login';
import ParentSignup from './views/ParentSignup';
import StudentSignup from './views/StudentSignup';

import './main.css';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/login' exact component={Login} />
          <Route path='/parent-signup' exact component={ParentSignup} />
          <Route path='/student-signup' exact component={StudentSignup} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
