import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
    render() {
        return (
            <div>
                <ul className="main-menu">
                    <li><Link to="/login" className="item">Login</Link></li>
                    <li><Link to="/password-reset" className="item">Password reset</Link></li>
                    <li><Link to="/registration" className="item">Registration</Link></li>
                    <li><Link to="/registration-form" className="item">Registration form</Link></li>
                    <li><Link to="/program" className="item">Program</Link></li>
                    <li><Link to="/tariff" className="item">Tariff</Link></li>
                    <li><Link to="/training" className="item">Training</Link></li>
                </ul>
            </div>
        )
    }
})
