import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// lazy-load
const Home = lazy(() => import('./pages/Home'));

const Root = () => (
  <Router>
    <Suspense fallback="loading...">
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
    </Suspense>
  </Router>
);

export default Root;
