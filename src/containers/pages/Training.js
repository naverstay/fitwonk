import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import Helmet from 'react-helmet'
import { url } from '../../config'

import {
    training_reset,
    training_start,
    training_pause,
    training_help_layer_show,
    training_help_layer_hide,
    training_pulse_value_add
} from '../../actions'

import {
    TRAINING_STATUS_RUNING,
    TRAINING_STATUS_PAUSED,
    TRAINING_STATUS_FINISHED,
    getTraining
} from '../../reducers/training'

function sec2time(seconds) {
    if (seconds > 0) {
        var h = Math.floor(seconds / 3600);
        var m = Math.floor((seconds - h * 3600) / 60);
        var s = seconds - h * 3600 - m * 60;

        return (h > 0 ? ((h > 9 ? "" : "0") + h + ":") : "") +
            (m > 9 ? "" : "0") + m + ":" +
            (s > 9 ? "" : "0") + s;
    } else {
        return '00:00';
    }
}

class StartCounter extends Component {
    render() {
        const { training } = this.props;
        let content = null;
        if (training.restTime > 0 && training.startedAt > 0) {
            let title = '';
            if (training.exercise < 0) {
                title = <span>Приготовьтесь, тренировка<br/>скоро начнется</span>;
            } else {
                title = 'Секунд осталось';
            }
            content =
                <div className="countdown">
                    <div className="count">{training.restTime}</div>
                    <div className="desc">{title}</div>
                </div>;
        }
        return content;
    }
}

class GeneralCounter extends Component {
    componentDidMount() {
        if($.fn.knob instanceof Function) {
            $("#generalCounter .round-count").knob({
                'readOnly': true,
                'min': 0,
                'max': 100,
                'step': 1,
                'thickness': 0.15,
                'width': '152',
                'height': '152',
                'inputcolor': '#2a75b9',
                'fgColor': "#2a75b9",
                'bgColor': "#c6c6c6"
            });
        }
    }

    render() {
        const { training } = this.props;
        let content = null, perc = 0, style = {};
        if (training.restTime == 0 || training.startedAt == 0) {
            if (training.totalTime > 0) {
                perc = Math.round(100 * training.spentTime / training.totalTime);
            }
            $("#generalCounter").find(".round-count").val(perc).trigger('change');
        } else {
            style = {display: "none"};
        }
        content =
            <div className="general" id="generalCounter" style={style}>
                <div className="stat">
                    <div className="perc"><span>{perc}</span>%</div>
                    <div className="text">Тренировка</div>
                    <div className="timer">{sec2time(training.spentTime)}</div>
                </div>
                <div className="round-count"></div>
            </div>;
        return content;
    }
}

class StepCounter extends Component {
    componentDidMount() {
        if($.fn.knob instanceof Function) {
            $("#stepCounter .round-count").knob({
                'readOnly': true,
                'min': 0,
                'max': 100,
                'step': 1,
                'thickness': 0.1,
                'width': '230',
                'height': '230',
                'inputColor': '#2a75b9',
                'fgColor': '#2a75b9',
                'bgColor': '#c6c6c6'
            });
        }
    }

    render() {
        const { training } = this.props;
        let content = null, perc = 0, style = {};
        if (training.restTime == 0 || training.startedAt == 0) {
            let ind = training.exercise;
            if (ind >= 0 && ind < training.exercises.length && training.exercises[ind].duration > 0) {
                perc = Math.round(100 * training.workTime / training.exercises[ind].duration);
            }
            $("#stepCounter").find(".round-count").val(perc).trigger('change');
        } else {
            style = {display: "none"};
        }
        content =
            <div className="step" id="stepCounter" style={style}>
                <div className="stat">
                    <div className="perc"><span>{perc}</span>%</div>
                    <div className="text">Упражнение</div>
                    <div className="timer">{sec2time(training.workTime)}</div>
                </div>
                <div className="round-count"></div>
            </div>;
        return content;
    }
}

class Counters extends Component {
    render() {
        const { training } = this.props;
        let content = null;
        if (training.status < TRAINING_STATUS_FINISHED) {
            content =
                <div className="counters widget-step-work">
                    <GeneralCounter training={training} />
                    <StepCounter training={training} />
                </div>;
        }
        return content;
    }
}

class HelpLayer extends Component {
    componentDidMount() {
        this.localState.mounted = true;
        videojs($('#widget-video').get(0))
    }

    render() {
        const { training } = this.props;
        if (!this.localState) {
            this.localState = {
                video: '',
                mounted: false,
                visible: false
            };
        }

        let ind = training.exercise;
        if (ind < 0) {
            ind++;
        }
        let restTime = ind < training.exercises.length ? training.exercises[ind].resttime : 1000;
        let isVisible = training.isHelpLayerVisible && (training.restTime == 0 || (training.restTime > 5 && (restTime - training.restTime > 5)) || training.startedAt == 0);
        let isPlayerVisible = training.status < TRAINING_STATUS_FINISHED;
        let style = {}, playerStyle = {}, pulseStyle = {};

        if (!isVisible) {
            style = {display: 'none'};
        }

        if (!isPlayerVisible) {
            pulseStyle = {display: 'block'};
            playerStyle = {display: 'none'};
        }

        let video = training.exercises[0].video;
        if (training.restTime > 0 && training.exercise >= 0) {
            ind++;
        }
        if (ind < training.exercises.length) {
            video = training.exercises[ind].video;
        }
        let plr = null;
        if (this.localState.video != video) {
            this.localState.video = video;
            if (this.localState.mounted) {
                plr = videojs($('#widget-video').get(0));
                plr.ready(function() {
                    this.src({ type: "video/mp4", src: video });
                    if (isVisible) {
                        this.play();
                    }
                });
            }
        }
        if (this.localState.visible != isVisible) {
            this.localState.visible = isVisible;
            if (this.localState.mounted) {
                if (!plr) {
                    plr = videojs($('#widget-video').get(0));
                }
                if (isVisible) {
                    plr.ready(function () {
                        this.play();
                    });
                } else {
                    plr.ready(function () {
                        this.pause();
                    });
                }
            }
        }

        let player =
            <video id="widget-video" className="video-js vjs-default-skin vjs-big-play-centered" controls preload loop poster="/img/poster-frame.jpg" width="496" height="279" style={{margin: "0px auto !important"}}>
                <source data-res="720" src={video} type="video/mp4" />
            </video>;


        let content =
            <div className="help-layer" style={style}>
                <div className="help-ind">
                    <div className="practice widget-step-work" style={playerStyle}>{player}</div>
                    <div className="help-content widget-step-pulse" style={pulseStyle}>
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
            </div>;
        return content;
    }
}

class InfoTimers extends Component {
    render() {
        const { training } = this.props;
        let sTitle = null, sTime = null, eTitle = null, eTime = null, ind = training.exercise;
        if (training.restTime > 0) {
            if (training.startedAt > 0) {
                sTitle = 'Отдых ';
                sTime = sec2time(training.restTime);
            } else {
                sTitle = 'Прошло ';
                sTime = sec2time(training.spentTime);
            }
        } else {
            if (ind < training.exercises.length) {
                sTitle = 'Упражнение ';
                if (ind >= 0) {
                    sTime = sec2time(training.exercises[ind].duration - training.workTime);
                } else {
                    sTime = sec2time(training.workTime);
                }
            }
        }
        if (ind < training.exercises.length) {
            eTitle = 'Осталось ';
            eTime = sec2time(training.totalTime - training.spentTime);
        }

        let style = null;
        if (training.status >= TRAINING_STATUS_FINISHED) {
            style = {visibility: 'hidden'};
        }
        let content =
            <div className="training-info" style={style}>
                <div className="half-left">
                    <div className="ind top widget-step-work">
                        <span className="countSubject">{sTitle}</span><span className="countTime">{sTime}</span>
                    </div>
                </div>
                <div className="half-right">
                    <div className="ind top widget-step-work">{eTitle}<span className="remainTime">{eTime}</span>
                    </div>
                </div>
            </div>;
        return content;
    }
}

class Buttons extends Component {
    render() {
        const { training, training_reset, training_start, training_pause } = this.props;
        let button = null;
        let buttonLeft = null;
        let buttonRight = null;
        switch(training.status) {
            case TRAINING_STATUS_RUNING:
                button =
                    <a className="main-button main-button-pause" onClick={training_pause}>
                        <span className="wr-icon pause"><img src="img/icon_sprite_img.png"/></span>
                        <span className="text">Пауза</span>
                    </a>;
                break;
            case TRAINING_STATUS_PAUSED:
                button =
                    <a className="main-button main-button-start" onClick={training_start}>
                        <span className="wr-icon play"><img src="img/icon_sprite_img.png"/></span>
                        <span className="text">Старт</span>
                    </a>;
                break;
            case TRAINING_STATUS_FINISHED:
                button =
                    <a className="main-button main-button-pulse widget-step-pulse">
                        <span className="wr-icon heart"><img src="img/icon_sprite_img.png"/></span>
                        <span className="text"></span>
                    </a>;
                break;
        }
        if (training.status != TRAINING_STATUS_RUNING) {
            buttonLeft =
                <div className="half-left">
                    <div className="ind"><button onClick={training_reset} className="button">Сначала</button></div>
                </div>;
            buttonRight =
                <div className="half-right">
                    <div className="ind"><Link to="/calendar" className="button">Закрыть</Link></div>
                </div>;
        }
        return (
            <div>
                {buttonLeft}
                {buttonRight}
                <div className="button-place">
                    {button}
                </div>
            </div>
        )
    }
}

class RatingPanel extends Component {
    render() {
        return (
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
        )
    }
}

class MessagePanel extends Component {
    render() {
        return (
            <div className="new-message widget-step-comment">
                <div className="m-title">Напишите ваше впечатление от тренировки</div>
                <div className="wr-textarea"><textarea></textarea></div>
                <div className="chat-setting" style={{"display": "none"}}>
                    <div className="smile"></div>
                    <div className="photo"><input type="file"/></div>
                </div>
                <input type="submit" value="Отправить"/>
            </div>
        )
    }
}

class ExerciseInfo extends Component {
    render() {
        const { training, helpClick, training_pulse_value_add } = this.props;
        let content = null;
        let title = '', descTitle = '', style = null;
        let ind = training.exercise + 1;
        if (ind < training.exercises.length) {
            title = training.exercises[ind].name;
            descTitle = 'Следующее упражнение';
        } else {
            if (training.status == TRAINING_STATUS_FINISHED) {
                descTitle = 'Введите значение пульса (ударов в минуту)';
                style = {zIndex: 55, display: 'block'};
            }
        }

        const pulseClick = () => {
            training_pulse_value_add($('#pulse').val());
        };

        content =
            <div className="widget-bottom widget-step-work widget-step-pulse">
                <div className="desc-title">{descTitle}</div>
                <div className="title">{title}</div>
                <div className="pulse widget-step-pulse" style={style}>
                    <input type="submit" value="Ок" onClick={pulseClick} />
                    <input type="text" id="pulse"/>
                    <div className="help-pulse">
                        <a className="butt" id="pulseHelp" onClick={helpClick}>Как замерять?</a>
                    </div>
                </div>
            </div>;
        return content;
    }
}

class WidgetPulse extends Component {
    render() {
        const { training } = this.props;
        let content = null;
        if (training.status == TRAINING_STATUS_FINISHED) {
            content =
                <div className="end-training widget-step-pulse" style={{display: 'block'}}>
                    <div className="fs55">Тренировка</div>
                    <div className="fs55">завершена</div>
                    <div className="fflc fs20">далее</div>
                    <div className="fs35">Замерить пульс</div>
                </div>;
        }
        return content;
    }
}

class WidgetRate extends Component {
    render() {
        return (
            <div className="end-training widget-step-rate widget-step-comment">
                <div className="fs35">Тренировка завершена</div>
                <div className="fs20 totals">Время: 20:00 Упражнений: 5 Пульс: 096</div>
                <div className="wr-img widget-step-rate"><img src={url("uploads/bages/1.png")} alt=""/></div>
                <div className="fs20 widget-step-rate">До следующего уровня</div>
                <div className="fs20 widget-step-rate">Осталось 19 тренировок</div>
                <div className="fs70 widget-step-comment">Спасибо!</div>
                <div className="fs20 widget-step-comment">Следующая тренировка завтра</div>
            </div>
        )
    }
}

class Training extends Component {
    render() {
        const {
            training,
            training_reset,
            training_start,
            training_pause,
            training_help_layer_show,
            training_help_layer_hide,
            training_pulse_value_add
        } = this.props;

        if (!this.localState) {
            let beepTick = null, beepEnd = null;
            try {
                beepTick = new Audio(url('/uploads/sound/beep_tick.mp3'));
                beepEnd = new Audio(url('/uploads/sound/beep_end.mp3'));
            } catch (e) {

            }
            this.localState = {
                isMuted: false,
                beepTick: beepTick,
                beepEnd: beepEnd
            }
        }

        let ind = training.exercise;

        let caption = null;
        let description = null;

        if (!this.localState.isMuted && ind <= training.exercises.length && this.localState.beepTick && this.localState.beepEnd) {
            if (training.restTime == 0) {
                if (ind >= 0) {
                    if (ind >= training.exercises.length) {
                        this.localState.beepEnd.play();
                    } else {
                        if (training.workTime >= training.exercises[ind].duration) {
                            this.localState.beepEnd.play();
                        } else if (training.workTime + 5 > training.exercises[ind].duration) {
                            this.localState.beepTick.play();
                        } else if (training.workTime == 0) {
                            this.localState.beepEnd.play();
                        }
                    }
                }
            } else if (training.restTime < 5) {
                this.localState.beepTick.play();
            }
        }

        if (training.restTime > 0 && ind >= 0) {
            if (ind < training.exercises.length) {
                caption = 'Отдых ' + training.exercises[ind].resttime + ' секунд';
            }
        } else {
            if (ind < 0) {
                ind++;
            }
            if (ind < training.exercises.length) {
                caption = training.exercises[ind].name;
                description = 'Подход ' + (ind + 1);
            }
        }

        const mute_button_click = () => {
            this.localState.isMuted = !this.localState.isMuted;
            this.forceUpdate();
        };

        const help_layer_show = () => {
            if (ind < training.exercises.length) {
                videojs($('#widget-video').get(0)).ready(function () {
                    this.play();
                });
            }
            training_help_layer_show();
        };
        const help_layer_hide = () => {
            videojs($('#widget-video').get(0)).ready(function() {
                this.pause();
            });
            training_help_layer_hide();
        };

        let helpButtonTitle = 'Видео';
        let helpButtonClass = 'button help auto-text widget-step-work widget-step-pulse';
        if (training.status >= TRAINING_STATUS_FINISHED) {
            helpButtonTitle = '?';
            helpButtonClass = 'button help widget-step-work widget-step-pulse';
        }

        let content =
            <div className="widget">
                <Helmet title="Тренировка, день 1-й" />
                <a name="widget"></a>
                <div className="widget-layer">
                    <div className="widget-body">
                        <div className="pattern"></div>
                        <div className="widget-width">
                            <div className="desc-title widget-step-work widget-step-pulse">{description}</div>
                            <div className="title widget-step-work widget-step-pulse">{caption}</div>
                            <a className={"button volume widget-step-work widget-step-pulse" + (this.localState.isMuted ? ' no' : '')} onClick={mute_button_click}>
                                <span className="wr-img"><img src="img/icon_sprite_img.png"/></span>
                            </a>
                            <a className={helpButtonClass} onClick={training.isHelpLayerVisible ? help_layer_hide : help_layer_show}>{helpButtonTitle}</a>

                            <WidgetPulse training={training} />
                            <WidgetRate />

                            <StartCounter training={training} />
                            <Counters training={training} />
                            <HelpLayer training={training} />

                        </div>
                    </div>

                    <div className="widget-width">
                        <div className="widget-navigate widget-step-work widget-step-pulse">
                            <div className="place">
                                <InfoTimers training={training} />
                                <Buttons training={training} training_reset={training_reset} training_start={training_start} training_pause={training_pause} />
                            </div>
                        </div>
                        <ExerciseInfo training={training} helpClick={training.isHelpLayerVisible ? help_layer_hide : help_layer_show} training_pulse_value_add={training_pulse_value_add} />
                        <RatingPanel />
                        <MessagePanel />
                    </div>

                    <div className="hide-page-layer"></div>
                </div>
            </div>;

        return content;
    }
}

export default connect(
    state => ({
        training: getTraining(state)
    }), {
        training_reset,
        training_start,
        training_pause,
        training_help_layer_show,
        training_help_layer_hide,
        training_pulse_value_add
    })(Training)
