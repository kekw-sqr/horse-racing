
import React from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"

import './App.css'
import { HorseRacing } from './pages/horseRacing/HorseRacing'
import { Landing } from './pages/landing/Landing'
import { HORSE_RACING } from './routs'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path={HORSE_RACING} component={HorseRacing} />
      </Switch>
    </Router>

  )
}

export default App
