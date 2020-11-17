import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/dashboard';
import Images from '../pages/images';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/images/:id" component={Images} />
  </Switch>
);

export default Routes;
