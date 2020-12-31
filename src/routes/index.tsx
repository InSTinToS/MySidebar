import React from 'react'

import SamePage from 'pages/SamePage'
import OtherPage from 'pages/OtherPage'
import Special from 'pages/Special'

import { Redirect, Route, Switch } from 'react-router-dom'

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path='/' exact>
        <Redirect to='/samePage' />
      </Route>

      <Route path='/samePage' component={SamePage} />
      <Route path='/otherPage' component={OtherPage} />
      <Route path='/special' component={Special} />
    </Switch>
  )
}

export default Routes
