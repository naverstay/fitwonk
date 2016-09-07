import React from 'react'

export default React.createClass({
    render() {
        return (
            <div className="widget">
                <a name="widget"></a>
                <div className="widget-layer">
                    <div className="widget-body">
                        <div className="pattern"></div>
                        <div className="widget-width">
                            <div className="desc-title widget-step-work widget-step-pulse">Подход 1</div>
                            <div className="title widget-step-work widget-step-pulse">Упражнение</div>
                            <a className="button volume widget-step-work widget-step-pulse"><span className="wr-img"><img src="img/icon_sprite_img.png" /></span></a>
                            <a className="button help widget-step-work widget-step-pulse">?</a>
                            <div className="end-training widget-step-pulse">
                                <div className="fs55">Тренировка</div>
                                <div className="fs55">завершена</div>
                                <div className="fflc fs20">далее</div>
                                <div className="fs35">Замерить пульс</div>
                            </div>
                            <div className="end-training widget-step-rate widget-step-comment">
                                <div className="fs35">Тренировка завершена</div>
                                <div className="fs20 totals">Время: 20:00 Упражнений: 5 Пульс: 096</div>
                                <div className="wr-img widget-step-rate"><img src="http://login.fitwonk.dev.pz.su/uploads/bages/1.png" alt=""/></div>
                                <div className="fs20 widget-step-rate">До следующего уровня</div>
                                <div className="fs20 widget-step-rate">Осталось 19 тренировок</div>
                                <div className="fs70 widget-step-comment">Спасибо!</div>
                                <div className="fs20 widget-step-comment">Следующая тренировка завтра</div>
                            </div>

                            <div className="countdown" style={{"display": "none"}}>
                                <div className="count">5</div>
                                <div className="desc">Приготовьтесь, тренировка<br/>скоро начнется</div>
                            </div>

                            <div className="counters widget-step-work">
                                <div className="general" id="generalCounter">
                                    <div className="stat">
                                        <div className="perc"><span></span>%</div>
                                        <div className="text">Тренировка</div>
                                        <div className="timer">02:34</div>
                                    </div>
                                    <div className="round-count"></div>
                                </div>
                                <div className="step" id="stepCounter">
                                    <div className="stat">
                                        <div className="perc"><span></span>%</div>
                                        <div className="text">Упражнение</div>
                                        <div className="timer">12:56</div>
                                    </div>
                                    <div className="round-count"></div>
                                </div>
                            </div>


                            <div className="help-layer">
                                <div className="help-ind">
                                    <div className="practice widget-step-work"></div>
                                    <div className="help-content widget-step-pulse">
                                        <div className="half">
                                            <div className="wr-cont">
                                                <img className="img" src="img/test_pulse1.png"/>
                                                    <p><span className="title-desc">Найдите пульс лучевой артерии,</span> (на внутренней стороне запястья)</p>
                                                    <p>Положите подушечки двух пальцев прямо под сгибом запястья со стороны большого пальца и слегка прижмите, пока не почувствуете пульс.</p>
                                            </div>
                                        </div>
                                        <div className="half">
                                            <div className="wr-cont">
                                                <img className="img" src="img/test_pulse2.png"/>
                                                    <p><span className="title-desc">Найдите пульс сонной артерии,</span></p>
                                                    <p>Для этого положите указательный и средний пальцы в ямочку между горлом и большой мышцей на шее. Слегка прижмите, пока не почувтвуете пульс</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="widget-width">
                        <div className="widget-navigate widget-step-work widget-step-pulse">
                            <div className="place">
                                <div className="half-left"><div className="ind top widget-step-work"><span className="countSubject">Прошло</span> <span className="countTime">02:45</span></div></div>
                                <div className="half-right"><div className="ind top widget-step-work">Осталось <span className="remainTime">17:15</span></div></div>
                                <div className="half-left"><div className="ind"><a href="trainee/training" className="button">Сначала</a></div></div>
                                <div className="half-right"><div className="ind"><a href="trainee/calendar" className="button">Закрыть</a></div></div>
                                <div className="button-place">
                                    <a className="main-button main-button-start">
                                        <span className="wr-icon play"><img src="img/icon_sprite_img.png" /></span>
                                        <span className="text">Старт</span>
                                    </a>
                                    <a className="main-button main-button-pause" style={{"display": "none"}}>
                                        <span className="wr-icon pause"><img src="img/icon_sprite_img.png" /></span>
                                        <span className="text">Пауза</span>
                                    </a>
                                    <a className="main-button main-button-pulse widget-step-pulse" style={{"display": "none"}}>
                                        <span className="wr-icon heart"><img src="img/icon_sprite_img.png" /></span>
                                        <span className="text"></span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="widget-bottom widget-step-work widget-step-pulse">
                            <div className="desc-title">Следующее упражнение</div>
                            <div className="title">Махи ногой в сторону стоя</div>
                            <div className="pulse widget-step-pulse" style={{"zIndex": "55"}}>
                                <input type="submit" value="Ок"/>
                                    <input type="text" />
                                    <div className="help-pulse">
                                        <a className="butt" id="pulseHelp">Как замерять?</a>
                                    </div>
                            </div>
                        </div>
                        <div className="rating-traning widget-step-rate widget-step-comment">
                            <div className="title-rating">Оцените тренировку</div>
                            <div className="select-rating">
                                <a className="rating-number value1"><span>1</span></a>
                                <a className="rating-number value2"><span>2</span></a>
                                <a className="rating-number value3"><span>3</span></a>
                                <a className="rating-number value4"><span>4</span></a>
                                <a className="rating-number value5"><span>5</span></a>
                            </div>
                            <div className="submit-button widget-step-rate">
                                <input type="submit" value="Ок"/>
                            </div>
                        </div>
                        <div className="new-message widget-step-comment">
                            <div className="m-title">Напишите ваше впечатление от тренировки</div>
                            <div className="wr-textarea"><textarea></textarea></div>
                            <div className="chat-setting" style={{"display": "none"}}>
                                <div className="smile"></div>
                                <div className="photo"><input type="file"/></div>
                            </div>
                            <input type="submit" value="Отправить"/>
                        </div>
                    </div>

                    <div className="hide-page-layer"></div>
                </div>
            </div>
        )
    }
})
