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
                            <div className="mob_hidden">Ваш персональный коучер</div>
                            <div className="dt_hidden">Твой персональный коучер</div>
                        </div>
                    </div>
                </div>
                <div className="page-width">

                    {/* Alert block */}

                    <form id="form-signup" action="site/program" method="post" role="form">
                        <input type="hidden" name="_csrf" value="ajY1aHRrbHEFVV4/WSVYOF9lYiMzHiI1GnJkLzYCPiAYe0AGKyogHg=="/>

                            <div className="registry-column">

                                <div className="info-section">
                                    <div className="info-title">
                                        <div className="text-title mob_hidden">Индивидуальная программа</div>
                                        <div className="text-title dt_hidden">Выбери коучера</div>
                                    </div>
                                    <div className="select-programm">


                                        <div className="trainer-title">Выбор коучера:</div>
                                        <div className="select-trainer">
                                            <div className="slider">
                                                <div className="over-line">
                                                    <div className="line">
                                                        <ul className="ul-line">
                                                            <li className="li-line"><div className="li-ind">
                                                                <div className="li-block li-trainer active" data-id="61">
                                                                    <div className="checked"><img src="img/icon_sprite_img.png"/></div>
                                                                    <div className="photo"><img src="http://login.fitwonk.dev.pz.su/uploads/avatar/61.jpg?1454997322"/></div>
                                                                    <div className="name">Михаил Аббасов</div>
                                                                    <div className="info"><span className="title">Возраст:</span> 31 год</div>
                                                                    <div className="info"><span className="title">Образование:</span> Образование:
                                                                        Сертифицированный тренер  «Ассоциации профессионалов фитнеса» (FPA) по специальности «инструктор тренажерного зала» </div>
                                                                    <div className="info"><span className="title">Направление:</span> Направление:
                                                                        Функциональный тренинг, подвесной тренинг (джангл жим),
                                                                        снижение веса, набор мышечной массы.
                                                                        Интересы:
                                                                        Калистеника, кроссфит, кинезис.
                                                                    </div>
                                                                </div>
                                                            </div></li>
                                                            <li className="li-line"><div className="li-ind">
                                                                <div className="li-block li-trainer " data-id="63">
                                                                    <div className="checked"><img src="img/icon_sprite_img.png"/></div>
                                                                    <div className="photo"><img src="http://login.fitwonk.dev.pz.su/uploads/avatar/63.jpg?1454962276"/></div>
                                                                    <div className="name">Кристина Малютина</div>
                                                                    <div className="info"><span className="title">Возраст:</span> 22 года</div>
                                                                    <div className="info"><span className="title">Образование:</span> Сертифицированный тренер Академии бодибилдинга и фитнеса по специальности «групповые программы».
                                                                        Профессиональный танцор с восьмилетним опытом работы, участница окружных и городских соревнований по бально-спортивным танцам. </div>
                                                                    <div className="info"><span className="title">Направление:</span> Проводит летние тренировки формата «воркаут», занятия по стрейчингу, , функциональному тренингу, снижению веса.

                                                                        Интересы: Стрейчинг, бально-спортивные танцы, стрип-пластика.
                                                                    </div>
                                                                </div>
                                                            </div></li>
                                                            <li className="li-line"><div className="li-ind">
                                                                <div className="li-block li-trainer " data-id="64">
                                                                    <div className="checked"><img src="img/icon_sprite_img.png"/></div>
                                                                    <div className="photo"><img src="http://login.fitwonk.dev.pz.su/uploads/avatar/64.jpg?1454962541"/></div>
                                                                    <div className="name">Алла Тарасова</div>
                                                                    <div className="info"><span className="title">Возраст:</span> 35 лет</div>
                                                                    <div className="info"><span className="title">Образование:</span> Образование:
                                                                        Мастер спорта Международного класса по легкой атлетике, выпускница «Российского государственного университета физической культуры, спорта и туризма».
                                                                        Повышение квалификации:
                                                                        «Тренировки при нарушениях и заболеваниях опорно-двигательного аппарата», «Функциональная анатомия», «Функциональный тренинг», «Беременность и фитнес», «Персональная тренировка при сколиозе», «TRX-SUSPTENTION Training Course».
                                                                    </div>
                                                                    <div className="info"><span className="title">Направление:</span> Направление:
                                                                        Реабилитация, кинезиотейпирование, функциональный тренинг, снижение веса, набор мышечной массы
                                                                        Интересы:
                                                                        Исправление осанки, растяжка, восстановление после травм.
                                                                    </div>
                                                                </div>
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
                                        <input id="li-trainer-id" type="hidden" name="trainer_id" value="61" />

                                        <div className="butt-submit">
                                            <input type="submit" className="mob_hidden" value="Я готов начать"/>
                                            <input type="submit" className="dt_hidden" value="Выбрать"/>
                                        </div>
                                    </div>
                                </div>

                            </div>
                    </form>
                </div>
                <div className="hide-page-layer"></div>
            </div>
        )
    },
    componentDidMount() {
        initSliders();
    }
})
