import React from 'react'

import GlobalStyle from 'styles'

import Routes from 'routes'

import { BrowserRouter } from 'react-router-dom'

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />

      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </>
  )
}

export default App
