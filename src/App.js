import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './views/Home';
import Login from './views/Login';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/login' exact component={Login} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
