import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// lazy load components, so only visited routes have their components mounted. Boosts app load time.
// IMPORTANT: Only default exported components can be lazy-loaded
const Home = lazy(() =>
  import(/* webpackChunkName: "Home" */ './views/Home')
);

const Login = lazy(() =>
  import(/* webpackChunkName: "Login" */ './views/Authentication/Login')
);

const Signup = lazy(() =>
  import(/* webpackChunkName: "Signup" */ './views/Authentication/Signup')
);

const ParentSignup = lazy(() =>
  import(/* webpackChunkName: "ParentSignup" */ './views/Authentication/ParentSignup')
);

const StudentSignup = lazy(() =>
  import(/* webpackChunkName: "StudentSignup" */ './views/Authentication/StudentSignup')
);

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Suspense fallback={<h3 style={{ width: '100%', margin: '20% auto', textAlign: 'center', display: 'flex', justifyContent: 'center' }}>Loading...</h3>}>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/login' exact component={Login} />
            <Route path='/signup' exact component={Signup} />
            <Route path='/parent-signup' exact component={ParentSignup} />
            <Route path='/student-signup' exact component={StudentSignup} />
          </Switch>
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;
