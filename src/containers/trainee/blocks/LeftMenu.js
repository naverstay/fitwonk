import React from 'react'
import NavLink from '../../common/NavLink'

export default React.createClass({
    render() {
        return (
            <ul className="main-menu">
                <li>
                    <NavLink to="/" className="item" onlyActiveOnIndex={true}><span className="icon"><img src="http://login.fitwonk.dev.pz.su/img/icon_fitwonk.png" alt="" /></span>Мой день</NavLink>
                </li>
                <li>
                    <NavLink to="/calendar" className="item"><span className="icon"><img src="http://login.fitwonk.dev.pz.su/img/icon_calendar.png" alt="" /></span>Календарь тренировок</NavLink>
                </li>
                <li>
                    <NavLink to="/dialog" className="item"><span className="icon"><img src="http://login.fitwonk.dev.pz.su/img/icon_trainer.png" alt="" /></span>Мой коучер</NavLink>
                </li>
                <li>
                    <NavLink to="/anthropometry" className="item"><span className="icon"><img src="http://login.fitwonk.dev.pz.su/img/icon_target.png" alt="" /></span>Мои цели</NavLink>
                </li>
                <li>
                    <NavLink to="/profile" className="item"><span className="icon"><img src="http://login.fitwonk.dev.pz.su/img/icon_settings.png" alt="" /></span>Настройки</NavLink>
                </li>
            </ul>
        )
    }
})
