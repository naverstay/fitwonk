import React from 'react'

export default React.createClass({
    render() {
        return (
            <div>
                <div class="header">
                    <div class="page-width">
                        <div class="logo">
                            <a href=""><img src="img/logo_fitwonk.png" title="FITWORK" alt="FITWORK"/></a>
                        </div>
                        <div class="header-title">
                            <div>Ваш персональный коучер</div>
                        </div>
                    </div>
                </div>
                <div class="page-width">

                    {/* Alert block */}

                    <form id="form-signup" action="site/program" method="post" role="form">
                        <input type="hidden" name="_csrf" value="ajY1aHRrbHEFVV4/WSVYOF9lYiMzHiI1GnJkLzYCPiAYe0AGKyogHg=="/>

                            <div class="registry-column">

                                <div class="info-section">
                                    <div class="info-title">
                                        <div class="text-title">Индивидуальная программа</div>
                                    </div>
                                    <div class="select-programm">


                                        <div class="trainer-title">Выбор коучера:</div>
                                        <div class="select-trainer">
                                            <div class="slider">
                                                <div class="over-line">
                                                    <div class="line">
                                                        <ul class="ul-line">
                                                            <li class="li-line"><div class="li-ind">
                                                                <div class="li-block li-trainer active" data-id="61">
                                                                    <div class="checked"><img src="img/icon_sprite_img.png"/></div>
                                                                    <div class="photo"><img src="http://login.fitwonk.dev.pz.su/uploads/avatar/61.jpg?1454997322"/></div>
                                                                    <div class="name">Михаил Аббасов</div>
                                                                    <div class="info"><span class="title">Возраст:</span> 31 год</div>
                                                                    <div class="info"><span class="title">Образование:</span> Образование:
                                                                        Сертифицированный тренер  «Ассоциации профессионалов фитнеса» (FPA) по специальности «инструктор тренажерного зала» </div>
                                                                    <div class="info"><span class="title">Направление:</span> Направление:
                                                                        Функциональный тренинг, подвесной тренинг (джангл жим),
                                                                        снижение веса, набор мышечной массы.
                                                                        Интересы:
                                                                        Калистеника, кроссфит, кинезис.
                                                                    </div>
                                                                </div>
                                                            </div></li>
                                                            <li class="li-line"><div class="li-ind">
                                                                <div class="li-block li-trainer " data-id="63">
                                                                    <div class="checked"><img src="img/icon_sprite_img.png"/></div>
                                                                    <div class="photo"><img src="http://login.fitwonk.dev.pz.su/uploads/avatar/63.jpg?1454962276"/></div>
                                                                    <div class="name">Кристина Малютина</div>
                                                                    <div class="info"><span class="title">Возраст:</span> 22 года</div>
                                                                    <div class="info"><span class="title">Образование:</span> Сертифицированный тренер Академии бодибилдинга и фитнеса по специальности «групповые программы».
                                                                        Профессиональный танцор с восьмилетним опытом работы, участница окружных и городских соревнований по бально-спортивным танцам. </div>
                                                                    <div class="info"><span class="title">Направление:</span> Проводит летние тренировки формата «воркаут», занятия по стрейчингу, , функциональному тренингу, снижению веса.

                                                                        Интересы: Стрейчинг, бально-спортивные танцы, стрип-пластика.
                                                                    </div>
                                                                </div>
                                                            </div></li>
                                                            <li class="li-line"><div class="li-ind">
                                                                <div class="li-block li-trainer " data-id="64">
                                                                    <div class="checked"><img src="img/icon_sprite_img.png"/></div>
                                                                    <div class="photo"><img src="http://login.fitwonk.dev.pz.su/uploads/avatar/64.jpg?1454962541"/></div>
                                                                    <div class="name">Алла Тарасова</div>
                                                                    <div class="info"><span class="title">Возраст:</span> 35 лет</div>
                                                                    <div class="info"><span class="title">Образование:</span> Образование:
                                                                        Мастер спорта Международного класса по легкой атлетике, выпускница «Российского государственного университета физической культуры, спорта и туризма».
                                                                        Повышение квалификации:
                                                                        «Тренировки при нарушениях и заболеваниях опорно-двигательного аппарата», «Функциональная анатомия», «Функциональный тренинг», «Беременность и фитнес», «Персональная тренировка при сколиозе», «TRX-SUSPTENTION Training Course».
                                                                    </div>
                                                                    <div class="info"><span class="title">Направление:</span> Направление:
                                                                        Реабилитация, кинезиотейпирование, функциональный тренинг, снижение веса, набор мышечной массы
                                                                        Интересы:
                                                                        Исправление осанки, растяжка, восстановление после травм.
                                                                    </div>
                                                                </div>
                                                            </div></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div class="navigate">
                                                    <a class="nav-butt prev"><span class="d-butt"><span class="icon"><img src="img/icon_sprite_img.png"/></span></span></a>
                                                    <a class="nav-butt next"><span class="d-butt"><span class="icon"><img src="img/icon_sprite_img.png"/></span></span></a>
                                                </div>
                                            </div>
                                        </div>
                                        <input id="li-trainer-id" type="hidden" name="trainer_id" value="61" />

                                        <div class="butt-submit">
                                            <input type="submit" value="Я готов начать" />
                                        </div>

                                    </div>
                                </div>

                            </div>
                    </form>
                </div>
                <div class="hide-page-layer"></div>
            </div>
        )
    }
})
