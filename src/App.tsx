import React from 'react'

import { Web3ReactProvider } from '@web3-react/core'
import { Web3Provider, ExternalProvider } from '@ethersproject/providers'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './App.css'
import { HorseRacing } from './pages/horseRacing/HorseRacing'
import { Landing } from './pages/landing/Landing'
import { HORSE_RACING } from './routes'
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
            <Route path={HORSE_RACING} component={HorseRacing} />
          </Switch>
        </Router>
      </Web3ReactProvider>
    </ThemeProvider>
  )
}

export default App
