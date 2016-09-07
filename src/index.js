import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'

// Trainee application
import AppTrainee from './containers/trainee/App'
import Anthropometry from './containers/trainee/Anthropometry'
import Calendar from './containers/trainee/Calendar'
import Dialog from './containers/trainee/Dialog'
import Home from './containers/trainee/Home'
import Profile from './containers/trainee/Profile'

// Pages
import PageLogin from './containers/pages/Login'
import PageProgram from './containers/pages/Program'
import PageSignin from './containers/pages/Signin'
import PageRegistration from './containers/pages/Registration'
import PageTraining from './containers/pages/Training'

render((
    <Router history={hashHistory}>
        {/* Trainee application */}
        <Route path="/" component={AppTrainee}>
            <IndexRoute component={Home}/>
            <Route path="/calendar" component={Calendar}/>
            <Route path="/dialog" component={Dialog}/>
            <Route path="/anthropometry" component={Anthropometry}/>
            <Route path="/profile" component={Profile}/>
        </Route>

        {/* Different pages */}
        <Route path="/login" component={PageLogin}/>
        <Route path="/program" component={PageProgram}/>
        <Route path="/signin" component={PageSignin}/>
        <Route path="/registration" component={PageRegistration}/>
        <Route path="/training" component={PageTraining}/>
    </Router>
), document.getElementById('application'))
