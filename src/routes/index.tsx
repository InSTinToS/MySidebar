import React from 'react'

import SamePage from 'pages/SamePage'
import OtherPage from 'pages/OtherPage'

import { Redirect, Route, Switch } from 'react-router-dom'

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path='/' exact>
        <Redirect to='/samePage' />
      </Route>

      <Route path='/samePage' component={SamePage} />
      <Route path='/otherPage' component={OtherPage} />
    </Switch>
  )
}

export default Routes
