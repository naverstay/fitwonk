import React from 'react'

export default React.createClass({
    render() {
        return (
            <div>
                <div className="header">
                    <div className="page-width">
                        <div className="logo">
                            <a href=""><img src="img/logo_fitwonk.png" title="FITWORK" alt="FITWORK"/></a>
                        </div>
                        <div className="header-title">
                            <div>Выбор абонемента и оплата</div>
                        </div>
                    </div>
                </div>
                <div className="page-width">


                    {/* Alert block */}

                    <form id="form-signup" action="site/signin" method="post" role="form">
                        <input type="hidden" name="_csrf" value="N1lIMURvN0JYOiNmaSEDCwIKH3oDGnkGRx0ZdgYGZRNFFD1fGy57LQ=="/>
                            <div className="registry-column">

                                <div className="info-section no-b-indent">
                                    <div className="info-title">
                                        <div className="sub"><a href="site/program">Изменить</a></div>
                                        <div className="text-title">Индивидуальная программа</div>
                                    </div>
                                </div>
                                <div className="info-section">
                                    <div className="info-title">
                                        <div className="text-title">Выбор абонемента и оплата</div>
                                    </div>
                                    <div className="select-programm">
                                        <div className="abonement-title">Выбор абонемента:</div>
                                        <input type="hidden" name="plan_id" id="li-trainer-id" value="skip" />
                                        <div className="select-trainer">
                                            <div className="slider">
                                                <div className="over-line">
                                                    <div className="line">
                                                        <ul className="ul-line">
                                                            <li className="li-line"><div className="li-ind">
                                                                <div className="li-block li-abonement" data-id="1" data-price="1300">
                                                                    <div className="checked"><img src="img/icon_sprite_img.png"/></div>
                                                                    <div className="time">1<span> мес.</span></div>
                                                                    <div className="price">1 300<span> руб.</span></div>
                                                                    <div className="t">В абонемент входят</div>
                                                                    <ul>
                                                                        <li>Квалифицированный тренер</li>
                                                                        <li>Индивидуальная программа тренировок</li>
                                                                        <li>300+ уникальных упражнений</li>
                                                                        <li>Умный помощник</li>
                                                                        <li>Online статистика ежедневных достижений</li>
                                                                    </ul>                                    </div>
                                                            </div></li>
                                                            <li className="li-line"><div className="li-ind">
                                                                <div className="li-block li-abonement" data-id="2" data-price="3500">
                                                                    <div className="checked"><img src="img/icon_sprite_img.png"/></div>
                                                                    <div className="time">3<span> мес.</span></div>
                                                                    <div className="price">3 500<span> руб.</span></div>
                                                                    <div className="t">В абонемент входят</div>
                                                                    <ul>
                                                                        <li>Квалифицированный тренер</li>
                                                                        <li>Индивидуальная программа тренировок</li>
                                                                        <li>300+ уникальных упражнений</li>
                                                                        <li>Умный помощник</li>
                                                                        <li>Online статистика ежедневных достижений</li>
                                                                    </ul>                                    </div>
                                                            </div></li>
                                                            <li className="li-line"><div className="li-ind">
                                                                <div className="li-block li-abonement" data-id="3" data-price="6600">
                                                                    <div className="checked"><img src="img/icon_sprite_img.png"/></div>
                                                                    <div className="time">6<span> мес.</span></div>
                                                                    <div className="price">6 600<span> руб.</span></div>
                                                                    <div className="t">В абонемент входят</div>
                                                                    <ul>
                                                                        <li>Квалифицированный тренер</li>
                                                                        <li>Индивидуальная программа тренировок</li>
                                                                        <li>300+ уникальных упражнений</li>
                                                                        <li>Умный помощник</li>
                                                                        <li>Online статистика ежедневных достижений</li>
                                                                    </ul>                                    </div>
                                                            </div></li>
                                                            <li className="li-line"><div className="li-ind">
                                                                <div className="li-block li-abonement" data-id="4" data-price="12500">
                                                                    <div className="checked"><img src="img/icon_sprite_img.png"/></div>
                                                                    <div className="time">12<span> мес.</span></div>
                                                                    <div className="price">12 500<span> руб.</span></div>
                                                                    <div className="t">В абонемент входят</div>
                                                                    <ul>
                                                                        <li>Квалифицированный тренер</li>
                                                                        <li>Индивидуальная программа тренировок</li>
                                                                        <li>300+ уникальных упражнений</li>
                                                                        <li>Умный помощник</li>
                                                                        <li>Online статистика ежедневных достижений</li>
                                                                    </ul>                                    </div>
                                                            </div></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="navigate">
                                                    <a className="nav-butt prev"><span className="d-butt"><span className="icon"><img src="img/icon_sprite_img.png"/></span></span></a>
                                                    <a className="nav-butt next"><span className="d-butt"><span className="icon"><img src="img/icon_sprite_img.png"/></span></span></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="payment-panel" style={{"display": "none"}}>
                                            <div className="payment-title">Способ оплаты</div>
                                            <div className="thee-column">
                                                <div className="zdc7">
                                                    <label>
                                                        <i className="i1"></i>
                                                        <div className="wr-radio"><input className="custom" type="radio" name="method" value="card" /></div>Банковская карта
                                                    </label>
                                                    <label>
                                                        <i className="i4"></i>
                                                        <div className="wr-radio"><input className="custom" type="radio" name="method" value="qiwi" /></div>Qiwi Wallet
                                                    </label>
                                                </div>
                                                <div className="zdc8">
                                                    <label>
                                                        <i className="i6"></i>
                                                        <div className="wr-radio"><input className="custom" type="radio" name="method" value="sbrf" /></div>Сбербанк Онлайн
                                                    </label>
                                                    <label>
                                                        <i className="i2"></i>
                                                        <div className="wr-radio"><input className="custom" type="radio" name="method" value="phone" disabled="disabled" /></div>Баланс телефона
                                                    </label>
                                                </div>

                                                <div className="zdc9 data-block">
                                                    <label>
                                                        <i className="i5"></i>
                                                        <div className="wr-radio"><input className="custom" type="radio" name="method" value="yandex" /></div>Яндекс.Деньги
                                                    </label>
                                                    <label>
                                                        <i className="i4"></i>
                                                        <div className="wr-radio"><input className="custom" type="radio" name="method" value="promocode" /></div>Промокод
                                                        <div className="registry-data hide" style={{"float": "left"}}>
                                                            <div className="data-block">
                                                                <div className="data-ind">
                                                                    <div className="title">Код:</div>
                                                                    <div className="wr-input" style={{"width": "235px"}}><input type="text" name="promocode" /></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="butt-submit">
                                            <input type="submit" value="Пропустить" />
                                        </div>
                                    </div>
                                </div>

                            </div>
                    </form>

                </div>
                <div className="hide-page-layer"></div>
            </div>
        )
    }
})
