import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// lazy load components, so only visited routes have their components mounted. Boosts app load time.
// IMPORTANT: Only default exported components can be lazy-loaded
const Home = lazy(() =>
  import(/* webpackChunkName: "Home" */ './views/Home')
);

const AboutUs = lazy(() =>
  import(/* webpackChunkName: "AboutUs" */ './views/AboutUs')
);

const Privacy = lazy(() =>
  import(/* webpackChunkName: "Privacy" */ './views/Privacy')
);

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Suspense fallback={<h3 style={{ width: '100%', margin: '20% auto', textAlign: 'center', display: 'flex', justifyContent: 'center' }}>Loading...</h3>}>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/about' exact component={AboutUs} />
            <Route path='/privacy' exact component={Privacy} />
          </Switch>
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;
