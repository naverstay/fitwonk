import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
    render() {
        return (
            <div className="block alert warning">
                <div style={{"display": "table-cell", "verticalAlign": "middle", "padding": "3px 0 3px 0"}}>Ваша подписка закончилась 21.08.2016.<br />Для активации всех функций необходимо оформить <Link to="/signin">новую подписку</Link>.</div>
                <div style={{"display": "table-cell", "verticalAlign": "middle", "textAlign": "center", "width": "40px"}}><button type="button" className="close">&times;</button></div>
            </div>
        )
    }
})
