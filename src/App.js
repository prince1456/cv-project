import React from 'react'
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import VideoBuilder from './containers/VideoBuilder/VideoBuilder'
import Checkout from './containers/Checkout/Checkout'
import classes from './App.module.scss'

export default function App() {
  return (
    <div className={classes.App}>
      <Layout>
        <Switch>
          <Route path="/editor" exact render={props => <VideoBuilder {...props} />} />
          <Route path="/download" exact render={props => <Checkout {...props} />} />
          <Redirect to="/editor" />
        </Switch>
      </Layout>
    </div>
  );
}