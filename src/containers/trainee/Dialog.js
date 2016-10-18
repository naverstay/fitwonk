import React from 'react'
import { Link } from 'react-router'
import Helmet from 'react-helmet'
import { url } from '../../config'

export default React.createClass({
    render() {
        return (
            <div>
                <Helmet title="Мой коучер" />
                <div className="info-title">
                    <div className="sub"><a href="trainee/archive">Архив диалогов</a></div>
                    <div className="text-title">Список диалогов</div>
                </div>
                <div className="info-list">


                    <div className="list-item drop-block closed">
                        <a className="item-title drop drop-button" data-id="67">
            <span className="drop-icon">
            <img src="img/icon_drop_sprite.png" alt=""/>        </span>
                            <span>Привет, давай знакомиться!</span>
                            <span className="title-desc">
            <span className="count hide">0</span>
            Вам ответили 08.08.2016 21:49        </span>
                        </a>
                        <div className="item-body drop-body">
                            <div className="chat" data-dialog_id="67" data-offset="10">
                                <div className="lenta-place grey">
                                    <div className="bg-pattern ">
                                        <div className="pattern-img"></div>
                                    </div>
                                    <div className="wr-lenta">
                                        <div className="lenta">
                                            <div className="message ">
                                                <p>Привет, давай знакомиться!</p>
                                                <p>Меня зовут FITWONK, я твой персональный фитнес-тренер. Вдвоем мы
                                                    добьемся любой поставленной цели, ну что, начнем?</p>
                                                <p>Анкета с параметрами на этапе регистрации – это только начало. <img
                                                    src={url("uploads/mail/smile-160125.gif")}
                                                    alt="smile"/> Пожалуйста, заполни показатели в разделе <Link
                                                    to="/anthropometry">Мои
                                                    цели</Link>, чтобы познакомиться ещё ближе. <img
                                                    src={url("uploads/mail/smile-160125.gif")}
                                                    alt="smile"/></p>
                                                <p>Теперь в разделе <Link
                                                    to="/calendar">Календарь</Link>
                                                    приступай к своей первой тренировке!</p>
                                                <p>Не забудь оставить отзыв: что было сложно, непонятно, с чем не
                                                    возникли проблемы, что беспокоило, - тогда мне будет проще
                                                    скорректировать упражнения и сделать тренировку более
                                                    результативной!</p>
                                                <p>Возникнут вопросы, обязательно пиши.</p>
                                                <p>Спасибо за доверие и приятно познакомиться! <img
                                                    src={url("uploads/mail/smile-160125.gif")}
                                                    alt="smile"/></p>
                                                <span className="reserv type2"></span>
                                                <div className="date">21:49 08.08.2016</div>
                                                <div className="tail"></div>
                                            </div>


                                        </div>
                                    </div>
                                </div>
                                <div className="text-place">

                                    <form id="w0" className="send-message" action="trainee/dialog" method="post">
                                        <input type="hidden" name="_csrf"
                                               value="a3hRZHN5WHkEGzozXjdsMF4rBi80DBY9GzwAIzEQCigZNSQKLDgUFg=="/>

                                            <div className="form-group field-dialogmessage-author_id required">

                                                <input type="hidden" id="dialogmessage-author_id"
                                                       className="form-control" name="DialogMessage[author_id]"
                                                       value="108"/>

                                                    <div className="help-block"></div>
                                            </div>
                                            <div className="form-group field-dialogmessage-dialog_id required">

                                                <input type="hidden" id="dialogmessage-dialog_id"
                                                       className="form-control" name="DialogMessage[dialog_id]"
                                                       value="67"/>

                                                    <div className="help-block"></div>
                                            </div>
                                            <div className="form-group field-dialogmessage-reciver_id required">

                                                <input type="hidden" id="dialogmessage-reciver_id"
                                                       className="form-control" name="DialogMessage[reciver_id]"
                                                       value="-1"/>

                                                    <div className="help-block"></div>
                                            </div>
                                            <input type="submit" value="Отправить"/>

                                                <div className="input-style">
                                                    <div className="wr-input">
                                                        <div
                                                            className="form-group field-dialogmessage-message required">

                                                            <textarea id="dialogmessage-message"
                                                                      className="form-control"
                                                                      name="DialogMessage[message]" rows="1"></textarea>


                                                        </div>
                                                    </div>
                                                    <div className="smile"></div>
                                                    <div className="photo"><input type="file" /></div>

                                                </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        )
    }
})
