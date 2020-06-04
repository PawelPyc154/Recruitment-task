import React, { Suspense } from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';

const Companies = React.lazy(() => import('./companies/Companies'));
const CompanyView = React.lazy(() => import('./companyView/CompanyView'));

const Pages: React.FC = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Switch>
      <Redirect exact from="/" to="/companies" />
      <Route exact path="/companies" component={Companies} />
      <Route exact path="/companies/:id" component={CompanyView} />
    </Switch>
  </Suspense>
);

export default Pages;
