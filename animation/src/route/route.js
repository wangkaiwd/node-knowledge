import React from 'react'
import App from '../app'
import Home from '../components/home'
import Product from '../components/product'
import { Route } from 'react-router'
const RouteConfig = (
  <Route path="/" component={App}>
    <Route path="/home" component={Home} />
    <Route path="/product" component={Product} />
  </Route>
)
export default RouteConfig;
