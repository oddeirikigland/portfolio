import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ReactGA from 'react-ga'
import Home from './pages/home/Home'
import SegmentAnalyzer from './pages/segmentAnalyzer/SegmentAnalyzer'
import Form from './pages/form/form'
import Animation from './pages/animation/animation'
import CityMonitor from './pages/cityMonitor/cityMonitor'

ReactGA.initialize(process.env.REACT_APP_TRACKING_CODE)
ReactGA.pageview('/')

const fouroffour = () => (
  <div
    style={{
      position: 'absolute',
      width: '100%',
      top: '50%',
      textAlign: 'center'
    }}
  >
    The page you are looking for does not exist.
  </div>
)

const redirectToUrl = urlAddress => {
  window.location.href = urlAddress
  return null
}

export default class App extends Component {
  render () {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/strava' component={SegmentAnalyzer} />
          <Route path='/form' component={Form} />
          <Route path='/animation' component={Animation} />
          <Route path='/city' component={CityMonitor} />
          <Route
            path='/strava_table'
            component={() =>
              redirectToUrl('https://segment-analyzer.herokuapp.com/strava')}
          />
          <Route
            path='/ambient'
            component={() =>
              redirectToUrl('https://shielded-peak-50254.herokuapp.com/')}
          />
          <Route
            path='/restart_in_julia'
            component={() =>
              redirectToUrl('https://oddeirikigland.github.io/restarts-in-julia/stable/')}
          />
          <Route
            path='/pred_telenor'
            component={() =>
              redirectToUrl('https://htmlpreview.github.io/?https://raw.githubusercontent.com/oddeirikigland/Summer-Project-Smarte-bygg/master/models/all_models.html')}
          />

          <Route component={fouroffour} />
        </Switch>
      </BrowserRouter>
    )
  }
}
