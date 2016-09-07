import React from 'react'

export default React.createClass({
    render() {
        return (
            <div className="info-section">
                <div className="info-title">
                    <div className="text-title">Мои цели</div>
                </div>
                <div className="info-list">

                    <div className="list-item left-line drop-block closed">
                        <div className="left-label"></div>
                        <a className="item-title drop label drop-button">
        <span className="icon">
                    <img src="http://login.fitwonk.dev.pz.su/uploads/anthropometry/pulse_icon.png" alt=""/>                </span>
                            <span className="drop-icon">
                    <img src="img/icon_sprite_img2.png" alt=""/>                </span>
                            <span>Пульс в покое</span>
                        </a>
                        <div className="item-body drop-body">
                            <div className="wr-graph" id="chart_pulse">
                                <p>Нет ни одного замера</p>
                            </div>
                            <div className="get-data in-item-body">
                                <div className="data-link pull-right"><a className="target-toggle">Изменить цель</a>
                                </div>
                                <div className="data-link"><a className="measure-toggle">Добавить замер</a></div>
                            </div>
                            <div className="get-data measure hide">
                                <div className="data w75">
                                    <div className="wr">
                                        <input type="text" name="value[9]" data-type="9" data-alias="pulse"/></div>
                                </div>
                                <div className="data-button">
                                    <button type="button" className="target-save" data-action="measurement">Добавить
                                        замер
                                    </button>
                                </div>
                            </div>
                            <div className="get-data in-item-body target hide">
                                <div className="data w75">
                                    <div className="wr">
                                        <input type="text" name="target[9]" data-type="9" data-alias="pulse"/></div>
                                </div>
                                <div className="data-button">
                                    <button type="button" className="target-save" data-action="target">Установить цель
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="list-item left-line drop-block closed">
                        <div className="left-label"></div>
                        <a className="item-title drop label drop-button">
        <span className="icon">
                    <img src="http://login.fitwonk.dev.pz.su/uploads/anthropometry/weight_icon.png" alt=""/>                </span>
                            <span className="drop-icon">
                    <img src="img/icon_sprite_img2.png" alt=""/>                </span>
                            <span>Вес</span>
                        </a>
                        <div className="item-body drop-body">
                            <div className="wr-graph" id="chart_weight">
                                <div className="loader">
                                    <img src="img/loader.gif"/>
                                </div>
                            </div>
                            <div className="get-data in-item-body">
                                <div className="data-link pull-right"><a className="target-toggle">Изменить цель</a>
                                </div>
                                <div className="data-link"><a className="measure-toggle">Добавить замер</a></div>
                            </div>
                            <div className="get-data measure hide">
                                <div className="data w75">
                                    <div className="wr">
                                        <input type="text" name="value[2]" value="98.0" data-type="2"
                                               data-alias="weight"/></div>
                                </div>
                                <div className="data-button">
                                    <button type="button" className="target-save" data-action="measurement">Добавить
                                        замер
                                    </button>
                                </div>
                            </div>
                            <div className="get-data in-item-body target hide">
                                <div className="data w75">
                                    <div className="wr">
                                        <input type="text" name="target[2]" value="93.0" data-type="2"
                                               data-alias="weight"/></div>
                                </div>
                                <div className="data-button">
                                    <button type="button" className="target-save" data-action="target">Установить цель
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="list-item left-line drop-block closed">
                        <div className="left-label"></div>
                        <a className="item-title drop label drop-button">
        <span className="icon">
                    <img src="http://login.fitwonk.dev.pz.su/uploads/anthropometry/chest_icon.png" alt=""/>                </span>
                            <span className="drop-icon">
                    <img src="img/icon_sprite_img2.png" alt=""/>                </span>
                            <span>Грудь</span>
                        </a>
                        <div className="item-body drop-body">
                            <div className="wr-graph" id="chart_chest">
                                <div className="loader">
                                    <img src="img/loader.gif"/>
                                </div>
                            </div>
                            <div className="get-data in-item-body">
                                <div className="data-link pull-right"><a className="target-toggle">Изменить цель</a>
                                </div>
                                <div className="data-link"><a className="measure-toggle">Добавить замер</a></div>
                            </div>
                            <div className="get-data measure hide">
                                <div className="data w75">
                                    <div className="wr">
                                        <input type="text" name="value[8]" value="110.0" data-type="8"
                                               data-alias="chest"/></div>
                                </div>
                                <div className="data-button">
                                    <button type="button" className="target-save" data-action="measurement">Добавить
                                        замер
                                    </button>
                                </div>
                            </div>
                            <div className="get-data in-item-body target hide">
                                <div className="data w75">
                                    <div className="wr">
                                        <input type="text" name="target[8]" data-type="8" data-alias="chest"/></div>
                                </div>
                                <div className="data-button">
                                    <button type="button" className="target-save" data-action="target">Установить цель
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="list-item left-line drop-block closed">
                        <div className="left-label"></div>
                        <a className="item-title drop label drop-button">
        <span className="icon">
                    <img src="http://login.fitwonk.dev.pz.su/uploads/anthropometry/waist_icon.png" alt=""/>                </span>
                            <span className="drop-icon">
                    <img src="img/icon_sprite_img2.png" alt=""/>                </span>
                            <span>Талия</span>
                        </a>
                        <div className="item-body drop-body">
                            <div className="wr-graph" id="chart_waist">
                                <p>Нет ни одного замера</p>
                            </div>
                            <div className="get-data in-item-body">
                                <div className="data-link pull-right"><a className="target-toggle">Изменить цель</a>
                                </div>
                                <div className="data-link"><a className="measure-toggle">Добавить замер</a></div>
                            </div>
                            <div className="get-data measure hide">
                                <div className="data w75">
                                    <div className="wr">
                                        <input type="text" name="value[5]" data-type="5" data-alias="waist"/></div>
                                </div>
                                <div className="data-button">
                                    <button type="button" className="target-save" data-action="measurement">Добавить
                                        замер
                                    </button>
                                </div>
                            </div>
                            <div className="get-data in-item-body target hide">
                                <div className="data w75">
                                    <div className="wr">
                                        <input type="text" name="target[5]" data-type="5" data-alias="waist"/></div>
                                </div>
                                <div className="data-button">
                                    <button type="button" className="target-save" data-action="target">Установить цель
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="list-item left-line drop-block closed">
                        <div className="left-label"></div>
                        <a className="item-title drop label drop-button">
        <span className="icon">
                    <img src="http://login.fitwonk.dev.pz.su/uploads/anthropometry/hips_icon.png" alt=""/>                </span>
                            <span className="drop-icon">
                    <img src="img/icon_sprite_img2.png" alt=""/>                </span>
                            <span>Бедра</span>
                        </a>
                        <div className="item-body drop-body">
                            <div className="wr-graph" id="chart_hips">
                                <p>Нет ни одного замера</p>
                            </div>
                            <div className="get-data in-item-body">
                                <div className="data-link pull-right"><a className="target-toggle">Изменить цель</a>
                                </div>
                                <div className="data-link"><a className="measure-toggle">Добавить замер</a></div>
                            </div>
                            <div className="get-data measure hide">
                                <div className="data w75">
                                    <div className="wr">
                                        <input type="text" name="value[4]" data-type="4" data-alias="hips"/></div>
                                </div>
                                <div className="data-button">
                                    <button type="button" className="target-save" data-action="measurement">Добавить
                                        замер
                                    </button>
                                </div>
                            </div>
                            <div className="get-data in-item-body target hide">
                                <div className="data w75">
                                    <div className="wr">
                                        <input type="text" name="target[4]" data-type="4" data-alias="hips"/></div>
                                </div>
                                <div className="data-button">
                                    <button type="button" className="target-save" data-action="target">Установить цель
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="list-item left-line drop-block closed">
                        <div className="left-label"></div>
                        <a className="item-title drop label drop-button">
        <span className="icon">
                    <img src="http://login.fitwonk.dev.pz.su/uploads/anthropometry/biceps_icon.png" alt=""/>                </span>
                            <span className="drop-icon">
                    <img src="img/icon_sprite_img2.png" alt=""/>                </span>
                            <span>Бицепс</span>
                        </a>
                        <div className="item-body drop-body">
                            <div className="wr-graph" id="chart_biceps">
                                <p>Нет ни одного замера</p>
                            </div>
                            <div className="get-data in-item-body">
                                <div className="data-link pull-right"><a className="target-toggle">Изменить цель</a>
                                </div>
                                <div className="data-link"><a className="measure-toggle">Добавить замер</a></div>
                            </div>
                            <div className="get-data measure hide">
                                <div className="data w75">
                                    <div className="wr">
                                        <input type="text" name="value[7]" data-type="7" data-alias="biceps"/></div>
                                </div>
                                <div className="help">
                                    <div className="label">?</div>
                                    <div className="info">
                                        <div className="wr-img">
                                            <img src="http://login.fitwonk.dev.pz.su/uploads/anthropometry/biceps.png"
                                                 alt=""/></div>
                                        <div className="wr-text">Приводите руку в положение как на фотографии. Кисти рук
                                            обязательно повернуты к голове. Измерение делаете по самой высокой точке
                                            бицепса и по самой нижней точке трицепса.
                                        </div>
                                    </div>
                                </div>
                                <div className="data-button">
                                    <button type="button" className="target-save" data-action="measurement">Добавить
                                        замер
                                    </button>
                                </div>
                            </div>
                            <div className="get-data in-item-body target hide">
                                <div className="data w75">
                                    <div className="wr">
                                        <input type="text" name="target[7]" data-type="7" data-alias="biceps"/></div>
                                </div>
                                <div className="data-button">
                                    <button type="button" className="target-save" data-action="target">Установить цель
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="list-item left-line drop-block closed">
                        <div className="left-label"></div>
                        <a className="item-title drop label drop-button">
                            <span className="icon"><img src="img/icons/reward_white.png" alt=""/></span>
                            <span className="drop-icon"><img src="img/icon_sprite_img2.png" alt=""/></span>
                            <span>Бейджи</span>
                        </a>
                        <div className="item-body drop-body">
                            <div className="rewards">
                                            <span className="reward-item ">
    <span className="reward-img"><img src="http://login.fitwonk.dev.pz.su/uploads/bages/1.png" alt=""/></span>
    <span className="reward-title">
        <span className="n">0-20</span>тренировок
    </span>
</span> <span className="reward-item disabled">
    <span className="reward-img"><img src="http://login.fitwonk.dev.pz.su/uploads/bages/2.png" alt=""/></span>
    <span className="reward-title">
        <span className="n">21-50</span>тренировок
    </span>
</span> <span className="reward-item disabled">
    <span className="reward-img"><img src="http://login.fitwonk.dev.pz.su/uploads/bages/3.png" alt=""/></span>
    <span className="reward-title">
        <span className="n">51-100</span>тренировок
    </span>
</span> <span className="reward-item disabled">
    <span className="reward-img"><img src="http://login.fitwonk.dev.pz.su/uploads/bages/4.png" alt=""/></span>
    <span className="reward-title">
        <span className="n">101-200</span>тренировок
    </span>
</span> <span className="reward-item disabled">
    <span className="reward-img"><img src="http://login.fitwonk.dev.pz.su/uploads/bages/5.png" alt=""/></span>
    <span className="reward-title">
        <span className="n">201-300</span>тренировок
    </span>
</span> <span className="reward-item disabled">
    <span className="reward-img"><img src="http://login.fitwonk.dev.pz.su/uploads/bages/6.png" alt=""/></span>
    <span className="reward-title">
        <span className="n">301-400</span>тренировок
    </span>
</span> <span className="reward-item disabled">
    <span className="reward-img"><img src="http://login.fitwonk.dev.pz.su/uploads/bages/7.png" alt=""/></span>
    <span className="reward-title">
        <span className="n">401-500</span>тренировок
    </span>
</span> <span className="reward-item disabled">
    <span className="reward-img"><img src="http://login.fitwonk.dev.pz.su/uploads/bages/8.png" alt=""/></span>
    <span className="reward-title">
        <span className="n">501-750</span>тренировок
    </span>
</span> <span className="reward-item disabled">
    <span className="reward-img"><img src="http://login.fitwonk.dev.pz.su/uploads/bages/9.png" alt=""/></span>
    <span className="reward-title">
        <span className="n">751-100000</span>тренировок
    </span>
</span></div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
})
