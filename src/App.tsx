import React from 'react'

import { Web3ReactProvider } from '@web3-react/core'
import { Web3Provider, ExternalProvider } from '@ethersproject/providers'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './App.css'
import { RNDGame } from './pages/RNDGame/RNDGame'
import { Landing } from './pages/landing/Landing'
import { RND_GAME } from './routes'
import { ThemeProvider } from './providers/ThemeProvider'

function getLibrary(provider: ExternalProvider) {
  return new Web3Provider(provider)
}

function App() {
  return (
    <ThemeProvider>
      <Web3ReactProvider getLibrary={getLibrary}>
        <Router>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path={RND_GAME} component={RNDGame} />
          </Switch>
        </Router>
      </Web3ReactProvider>
    </ThemeProvider>
  )
}

export default App
