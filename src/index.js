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
import PageRegistration from './containers/pages/Registration'
import PagePasswordReset from './containers/pages/PasswordReset'
import PageProgram from './containers/pages/Program'
import PageTariff from './containers/pages/Tariff'
import PageRegistrationForm from './containers/pages/RegistrationForm'
import PageTraining from './containers/pages/Training'

import PageTestPage from './containers/pages/TestPage'

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
        <Route path="/registration" component={PageRegistration}/>
        <Route path="/password-reset" component={PagePasswordReset}/>
        <Route path="/program" component={PageProgram}/>
        <Route path="/tariff" component={PageTariff}/>
        <Route path="/payment" component={PageTariff}/>
        <Route path="/registration-form" component={PageRegistrationForm}/>
        <Route path="/training" component={PageTraining}/>

        {/* Test page */}
        <Route path="/test_page" component={PageTestPage}/>
    </Router>
), document.getElementById('application'))
