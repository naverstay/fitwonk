import React from 'react'
import Alert from '../common/Alert'
import LeftMenu from './blocks/LeftMenu'

export default React.createClass({
  render() {
    return (
        <div>
            <div id="alertMessage" className="alert-message">
                <div className="page-width">
                    Старая версия IE
                </div>
            </div>
            <div className="header">
                <div className="page-width">
                    <div className="mob_menu mobMenu "></div>
                    <div className="logo">
                        <a href="trainee"><img src="http://login.fitwonk.dev.pz.su/img/logo_fitwonk.png" alt=""/></a>
                    </div>
                    <div className="header-title">
                        <div className="date">26.08.2016</div>
                        <div className="sep">|</div>
                        <div className="day"><a href="trainee/calendar">1 день</a></div>
                    </div>
                    <ul className="header-menu">
                        <li><a id="writeToUs">Написать нам</a></li>
                        <li className="sep">|</li>
                        <li><a href="site/logout" data-method="post">Выход</a></li>
                    </ul>
                </div>
            </div>
            <div className="page-width">
                <div className="left-column table-row-switcher">
                    <div className="user-block">
                        <a href="trainee/profile" className="border-avatar">
                        <span className="wr-img">
                            <img src="img/no-avatar.jpg" alt="" />                        </span>
                            <span className="user-label">
                            <img src="http://login.fitwonk.dev.pz.su/uploads/bages/1.png" alt="" />                        </span>
                        </a>
                        <div className="user-account-type"><span className="label">Тариф: </span><span className="value"><a href="payment/">Базовый</a></span></div>
                        <div className="user-name"><a href="trainee/profile">aovechkin</a></div>
                    </div>

                    <LeftMenu />

                </div>
                <div className="main-column">
                    <div className="info-place">
                        <div className="trainer-section">
                            <div className="user-block">
                                <a className="border-avatar" href="trainee/dialog">
                        <span className="wr-img">
                            <img src="http://login.fitwonk.dev.pz.su/uploads/avatar/61.jpg?1454997322" alt="" />                        </span>
                                </a>
                                <div className="user-name"><a href="trainee/dialog">Михаил</a></div>                        </div>
                            <div className="chain">
                                <img src="img/chain.png" alt="" />                        </div>
                            <div className="trainer-info">
                                <div className="name">Михаил Аббасов</div>
                                <div className="info">
                                    <span className="title">Образование:</span> Образование:
                                    Сертифицированный тренер  «Ассоциации профессионалов фитнеса» (FPA) по специальности «инструктор тренажерного зала» <br />
                                    <span className="title" style={{"marginBottom": "16px"}}>Специализация:</span> Направление:
                                    Функциональный тренинг, подвесной тренинг (джангл жим),
                                    снижение веса, набор мышечной массы.
                                    Интересы:
                                    Калистеника, кроссфит, кинезис.
                                    <br />
                                    <span className="title">Интересы:</span> Интересные интересы<br />
                                </div>
                            </div>
                        </div>
                    </div>


                    <Alert />

                    {this.props.children || <Home/>}


                    <form id="w0" className="info-section message_fitwonk" action="site/contact" method="post">
                        <input type="hidden" name="_csrf" value="Nko1a0p1QVJZKV48Zzt1GwMZYiANAA8WRg5kLAgcEwNEB0AFFTQNPQ==" /><div className="form-group field-contactform-name required">

                            <input type="hidden" id="contactform-name" className="form-control" name="ContactForm[name]" value="aovechkin" />

                                <div className="help-block"></div>
                        </div><div className="form-group field-contactform-email required">

                            <input type="hidden" id="contactform-email" className="form-control" name="ContactForm[email]" value="aovechkin@mail.ru" />

                                <div className="help-block"></div>
                        </div>    <div className="ang"></div>
                            <div className="info-title">
                                <div className="sub"><span><img src="http://login.fitwonk.dev.pz.su/img/icon_done_sprite.png" alt="" /></span></div>
                                <div className="text-title">Написать команде Fitwonk</div>
                            </div>
                            <div className="title">Причина обращения</div>
                            <div className="wr-select">
                                <div className="form-group field-contactform-subject required">

                                    <select id="contactform-subject" className="custom" name="ContactForm[subject]">
                                        <option value="40">Хочу изменить цель тренировок</option>
                                        <option value="41">Другое</option>
                                    </select>

                                    <div className="help-block"></div>
                                </div>    </div>
                            <div className="title">Пояснения</div>
                            <div className="wr-textarea">
                                <div className="form-group field-contactform-body required">

                                    <textarea id="contactform-body" className="form-control" name="ContactForm[body]"></textarea>

                                    <div className="help-block"></div>
                                </div>    </div>
                            <input type="submit" value="Отправить" />
                    </form>
                </div>
            </div>

        </div>
    )
  }
})
