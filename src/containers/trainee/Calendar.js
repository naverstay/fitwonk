import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
    render() {
        return (
            <div>
                <div className="info-section">
                    <div className="info-title">
                        <div className="text-title">Календарь тренировок</div>
                    </div>
                    <div className="calendar">
                        <table>
                            <tr>


                                <td><a href="trainee/calendar#training" className="day active"><span className="number">1</span><span
                                    className="t">день</span></a></td>


                                <td><span className="day disabled"><span className="number" data-id="13">2</span><span
                                    className="t">день</span></span></td>


                                <td><span className="day disabled"><span className="number" data-id="14">3</span><span
                                    className="t">день</span></span></td>


                                <td><span className="day disabled"><span className="number" data-id="15">4</span><span
                                    className="t">день</span></span></td>


                                <td><span className="day disabled"><span className="number" data-id="16">5</span><span
                                    className="t">день</span></span></td>


                                <td><span className="day disabled"><span className="number" data-id="17">6</span><span
                                    className="t">день</span></span></td>


                                <td><span className="day disabled"><span className="number" data-id="8">7</span><span
                                    className="t">день</span></span>
                                </td>

                            </tr>
                            <tr>


                                <td><span className="day disabled"><span className="number" data-id="20">8</span><span
                                    className="t">день</span></span></td>


                                <td><span className="day disabled"><span className="number" data-id="21">9</span><span
                                    className="t">день</span></span></td>


                                <td><span className="day disabled"><span className="number" data-id="22">10</span><span
                                    className="t">день</span></span></td>


                                <td><span className="day disabled"><span className="number" data-id="23">11</span><span
                                    className="t">день</span></span></td>


                                <td><span className="day disabled"><span className="number" data-id="24">12</span><span
                                    className="t">день</span></span></td>


                                <td><span className="day disabled"><span className="number" data-id="25">13</span><span
                                    className="t">день</span></span></td>


                                <td><span className="day disabled"><span className="number" data-id="26">14</span><span
                                    className="t">день</span></span></td>

                            </tr>
                            <tr>


                                <td><span className="day disabled"><span className="number" data-id="27">15</span><span
                                    className="t">день</span></span></td>


                                <td><span className="day disabled"><span className="number" data-id="59">16</span><span
                                    className="t">день</span></span></td>


                                <td><span className="day disabled"><span className="number" data-id="60">17</span><span
                                    className="t">день</span></span></td>


                                <td><span className="day disabled"><span className="number" data-id="30">18</span><span
                                    className="t">день</span></span></td>


                                <td><span className="day disabled"><span className="number" data-id="31">19</span><span
                                    className="t">день</span></span></td>


                                <td><span className="day disabled"><span className="number" data-id="32">20</span><span
                                    className="t">день</span></span></td>


                                <td><span className="day disabled"><span className="number" data-id="33">21</span><span
                                    className="t">день</span></span></td>

                            </tr>
                            <tr>


                                <td><span className="day disabled"><span className="number" data-id="34">22</span><span
                                    className="t">день</span></span></td>


                                <td><span className="day disabled"><span className="number" data-id="35">23</span><span
                                    className="t">день</span></span></td>


                                <td><span className="day disabled"><span className="number" data-id="36">24</span><span
                                    className="t">день</span></span></td>


                                <td><span className="day disabled"><span className="number" data-id="37">25</span><span
                                    className="t">день</span></span></td>


                                <td><span className="day disabled"><span className="number" data-id="38">26</span><span
                                    className="t">день</span></span></td>


                                <td><span className="day disabled"><span className="number" data-id="39">27</span><span
                                    className="t">день</span></span></td>


                                <td><span className="day disabled"><span className="number" data-id="40">28</span><span
                                    className="t">день</span></span></td>

                            </tr>
                            <tr>


                                <td><span className="day disabled"><span className="number" data-id="57">28</span><span
                                    className="t">день</span></span></td>

                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </table>
                    </div>
                </div>

                <a name="training"></a>
                <div className="info-section">
                    <div className="info-title">
                        <div className="sub">
                            Сегодня
                        </div>
                        <div className="text-title">
                            1 день
                        </div>
                    </div>


                    <div className="info-list">
                        <div className="list-item left-line drop-block closed e_id_46">
                            <div className="left-label"></div>
                            <a className="item-title drop label drop-button">
                                <span className="icon"><img
                                    src="http://login.fitwonk.dev.pz.su/uploads/exercise/icon/46.png" alt=""/></span>
                                <span className="drop-icon"><img src="img/icon_sprite_img2.png"/></span>
                                <span>Приседания</span>
                            </a>
                            <div className="item-body drop-body">
                                <div className="practice">
                                    <div className="video" style={{"marginBottom": "6px"}}>
                                        <video className="video-js vjs-default-skin vjs-big-play-centered" controls
                                               preload
                                               loop width="544" height="306" poster="img/poster-frame.jpg"
                                               data-setup="{}">
                                            <source data-res="720"
                                                    src="http://d2lgycgn2xkfkn.cloudfront.net/46_prisedaniya-720.mp4"
                                                    type="video/mp4"/>
                                            <p className="vjs-no-js">
                                                To view this video please enable JavaScript, and consider upgrading
                                                to a web browser that
                                                <a href="http://videojs.com/html5-video-support/" target="_blank">supports
                                                    HTML5 video</a>
                                            </p>
                                        </video>
                                    </div>
                                    <div className="foto-practice">
                                        <div className="wr-img">
                                            <img
                                                src="http://login.fitwonk.dev.pz.su/uploads/exercise/023-prisedaniya_profil_02-1443703905.jpeg"
                                                style={{"maxWidth": "320px"}}/>
                                            <div className="img-label"></div>
                                        </div>
                                        <div className="wr-img">
                                            <img
                                                src="http://login.fitwonk.dev.pz.su/uploads/exercise/023-prisedaniya_fas_01-1443704645.jpeg"
                                                style={{"maxWidth": "320px"}}/>
                                            <div className="img-label"></div>
                                        </div>
                                    </div>
                                    <div className="desc-practice">
                                        <p><strong>Исходное положение:</strong> ноги на ширине плеч, стопы параллельно
                                            друг другу. Руки вытянуты вперед, перпендикулярно полу.<br /><strong>Упражнение:</strong>
                                            опускаясь, отведите таз назад, как будто хотите сесть на стул, вес тела
                                            переносится на стопы, а не на пятки. Опускайтесь, до уровня чуть ниже
                                            параллели бедра с полом. Спина прямая. <br /><strong>Как дышать:</strong> на
                                            вдохе опускаемся вниз, на выдохе &ndash; возвращаемся в исходное
                                            положение.<br /><strong>Подсказка от Тренера:</strong> Пятки не отрываем от
                                            пола, не расслабляйте мышцы поясницы и живота до окончания упражнения. Это
                                            позволяет удерживать туловище в устойчивом положении</p></div>
                                </div>
                            </div>
                        </div>
                        <div className="list-item left-line drop-block closed e_id_93">
                            <div className="left-label"></div>
                            <a className="item-title drop label drop-button">
                                <span className="icon"><img
                                    src="http://login.fitwonk.dev.pz.su/uploads/exercise/icon/93.png" alt=""/></span>
                                <span className="drop-icon"><img src="img/icon_sprite_img2.png"/></span>
                                <span>Лодочка с прямыми руками вперед</span>
                            </a>
                            <div className="item-body drop-body">
                                <div className="practice">
                                    <div className="video" style={{"marginBottom": "6px"}}>
                                        <video className="video-js vjs-default-skin vjs-big-play-centered" controls
                                               preload
                                               loop width="544" height="306" poster="img/poster-frame.jpg"
                                               data-setup="{}">
                                            <source data-res="720"
                                                    src="http://d2lgycgn2xkfkn.cloudfront.net/93_lodochka-s-pryamimi-rukami-vpered-720.mp4"
                                                    type="video/mp4"/>
                                            <p className="vjs-no-js">
                                                To view this video please enable JavaScript, and consider upgrading
                                                to a web browser that
                                                <a href="http://videojs.com/html5-video-support/" target="_blank">supports
                                                    HTML5 video</a>
                                            </p>
                                        </video>
                                    </div>
                                    <div className="foto-practice">
                                        <div className="wr-img">
                                            <img
                                                src="http://login.fitwonk.dev.pz.su/uploads/exercise/194-lodochka-s-pryamyimi-rukami-vpered-1444648630.jpg"
                                                style={{"maxWidth": "320px"}}/>
                                            <div className="img-label"></div>
                                        </div>
                                    </div>
                                    <div className="desc-practice">
                                        <p>Исходное положение: лежа на животе. Руки вытянуты вперед, ладони повернуты
                                            друг к другу. Ноги прямые, немного разведены.<br />Упражнение: Поднимаем
                                            руки,ноги остаются на полу, расстояние от пола, примерно 20-30 сантиметров.
                                            Тянуться ладонями и стопами в противоположные стороны.<br />Как дышать: на
                                            вдохе поднимаем ноги и руки вверх, на выдохе &ndash; возвращаемся в исходное
                                            положение.<br />Подсказка от Тренера: чтобы удерживать баланс &ndash;
                                            напрягайте мышцы живота.</p></div>
                                </div>
                            </div>
                        </div>
                        <div className="list-item left-line drop-block closed e_id_97">
                            <div className="left-label"></div>
                            <a className="item-title drop label drop-button">
                                <span className="icon"><img
                                    src="http://login.fitwonk.dev.pz.su/uploads/exercise/icon/97.png" alt=""/></span>
                                <span className="drop-icon"><img src="img/icon_sprite_img2.png"/></span>
                                <span>Отжимания широким хватом с колен</span>
                            </a>
                            <div className="item-body drop-body">
                                <div className="practice">
                                    <div className="video" style={{"marginBottom": "6px"}}>
                                        <video className="video-js vjs-default-skin vjs-big-play-centered" controls
                                               preload
                                               loop width="544" height="306" poster="img/poster-frame.jpg"
                                               data-setup="{}">
                                            <source data-res="720"
                                                    src="http://d2lgycgn2xkfkn.cloudfront.net/97_otgimaniya-shirokim-hvatom-s-kolen-720.mp4"
                                                    type="video/mp4"/>
                                            <p className="vjs-no-js">
                                                To view this video please enable JavaScript, and consider upgrading
                                                to a web browser that
                                                <a href="http://videojs.com/html5-video-support/" target="_blank">supports
                                                    HTML5 video</a>
                                            </p>
                                        </video>
                                    </div>
                                    <div className="foto-practice">
                                        <div className="wr-img">
                                            <img
                                                src="http://login.fitwonk.dev.pz.su/uploads/exercise/101-otjimaniya-s-kolen-shirokiy-hvat_01-1444730354.jpg"
                                                style={{"maxWidth": "320px"}}/>
                                            <div className="img-label"></div>
                                        </div>
                                        <div className="wr-img">
                                            <img
                                                src="http://login.fitwonk.dev.pz.su/uploads/exercise/101-otjimaniya-s-kolen-shirokiy-hvat_02-1444730368.jpg"
                                                style={{"maxWidth": "320px"}}/>
                                            <div className="img-label"></div>
                                        </div>
                                    </div>
                                    <div className="desc-practice">
                                        <p>Исходное положение: Стоя га коленях,&nbsp;руки поставьте на пол, на
                                            расстояние немного шире плеч, смотрим вперед.</p>
                                        <p><br />Упражнение: Сгибая руки в локтях, опуститесь вниз почти коснувшись
                                            грудью пола, отожмитесь вверх, выпрямив руки почти полностью. Голова, плечи,
                                            таз и колени находятся на одной линии.</p>
                                        <p><br />Как дышать: на вдохе &ndash; опускаемся вниз, на выдохе &ndash;
                                            возвращаемся в исходное положение.</p>
                                        <p><br />Подсказка от Тренера: Не используйте силу инерции, поднимайте корпус
                                            исключительно за счет работы мышц. Не пытайтесь сводить лопатки &ndash; они
                                            должны быть полностью разведены и опущены.</p></div>
                                </div>
                            </div>
                        </div>
                        <div className="list-item left-line drop-block closed e_id_108">
                            <div className="left-label"></div>
                            <a className="item-title drop label drop-button">
                                <span className="icon"><img
                                    src="http://login.fitwonk.dev.pz.su/uploads/exercise/icon/108.png" alt=""/></span>
                                <span className="drop-icon"><img src="img/icon_sprite_img2.png"/></span>
                                <span>Обратные отжимания от стула, колени согнуты</span>
                            </a>
                            <div className="item-body drop-body">
                                <div className="practice">
                                    <div className="video" style={{"marginBottom": "6px"}}>
                                        <video className="video-js vjs-default-skin vjs-big-play-centered" controls
                                               preload
                                               loop width="544" height="306" poster="img/poster-frame.jpg"
                                               data-setup="{}">
                                            <source data-res="720"
                                                    src="http://d2lgycgn2xkfkn.cloudfront.net/108_obratnie-otgimaniya-ot-stula-720.mp4"
                                                    type="video/mp4"/>
                                            <p className="vjs-no-js">
                                                To view this video please enable JavaScript, and consider upgrading
                                                to a web browser that
                                                <a href="http://videojs.com/html5-video-support/" target="_blank">supports
                                                    HTML5 video</a>
                                            </p>
                                        </video>
                                    </div>
                                    <div className="foto-practice">
                                        <div className="wr-img">
                                            <img
                                                src="http://login.fitwonk.dev.pz.su/uploads/exercise/obratnyie-otjimaniya-ot-stula-koleni-sognutyi_01-1446711147.jpg"
                                                style={{"maxWidth": "320px"}}/>
                                            <div className="img-label"></div>
                                        </div>
                                        <div className="wr-img">
                                            <img
                                                src="http://login.fitwonk.dev.pz.su/uploads/exercise/obratnyie-otjimaniya-ot-stula-koleni-sognutyi_02-1446711235.jpg"
                                                style={{"maxWidth": "320px"}}/>
                                            <div className="img-label"></div>
                                        </div>
                                    </div>
                                    <div className="desc-practice">
                                        <p>Исходное положение: сидя на стуле. Ладони зафиксированы на переднем краю
                                            опоры и повернуты назад. Сместив таз со скамьи, удерживайте тело на весу и
                                            зафиксируйте положение. Кисть должна находиться под плечом.</p>
                                        <p>Упражнение: Прижав локти к корпусу, сгибайте руки в локтях и опускайте тело
                                            до положения, когда плечи станут параллельно полу. Бедра как можно ближе к
                                            полу. &nbsp;</p>
                                        <p>Как дышать: на вдохе сгибаем руки и опускаемся вниз, на выдохе &ndash;
                                            возвращаемся в исходное положение.</p>
                                        <p>Подсказка от Тренера: Не допускайте скачкообразных движений во время
                                            упражнения, очень важно работать равномерно.</p></div>
                                </div>
                            </div>
                        </div>
                        <div className="list-item left-line drop-block closed e_id_61">
                            <div className="left-label"></div>
                            <a className="item-title drop label drop-button">
                                <span className="icon"><img
                                    src="http://login.fitwonk.dev.pz.su/uploads/exercise/icon/61.png" alt=""/></span>
                                <span className="drop-icon"><img src="img/icon_sprite_img2.png"/></span>
                                <span>Пресс</span>
                            </a>
                            <div className="item-body drop-body">
                                <div className="practice">
                                    <div className="video" style={{"marginBottom": "6px"}}>
                                        <video className="video-js vjs-default-skin vjs-big-play-centered" controls
                                               preload
                                               loop width="544" height="306" poster="img/poster-frame.jpg"
                                               data-setup="{}">
                                            <source data-res="720"
                                                    src="http://d2lgycgn2xkfkn.cloudfront.net/61_press-720.mp4"
                                                    type="video/mp4"/>
                                            <p className="vjs-no-js">
                                                To view this video please enable JavaScript, and consider upgrading
                                                to a web browser that
                                                <a href="http://videojs.com/html5-video-support/" target="_blank">supports
                                                    HTML5 video</a>
                                            </p>
                                        </video>
                                    </div>
                                    <div className="foto-practice">
                                        <div className="wr-img">
                                            <img
                                                src="http://login.fitwonk.dev.pz.su/uploads/exercise/151-press_01-1445205730.jpg"
                                                style={{"maxWidth": "320px"}}/>
                                            <div className="img-label"></div>
                                        </div>
                                        <div className="wr-img">
                                            <img
                                                src="http://login.fitwonk.dev.pz.su/uploads/exercise/151-press_02-1445205743.jpg"
                                                style={{"maxWidth": "320px"}}/>
                                            <div className="img-label"></div>
                                        </div>
                                    </div>
                                    <div className="desc-practice">
                                        <p>Исходное положение: лежа на полу, руки за головой, ноги согнуты, стопы стоят
                                            на полу.</p>
                                        <p>Упражнение: Сгибаем верхнюю часть туловища по направлению к коленям, напрягая
                                            мышцы брюшного пресса. Поясница не &nbsp;отрываются от пола.</p>
                                        <p>Как дышать: выдох - на подъеме, на вдохе - &nbsp;возвращаемся в исходное
                                            положение.</p>
                                        <p>Подсказка от тренера: Поясница должна быть прижата к полу, чтобы не
                                            травмировать позвоночник.</p></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="description-right">
                        <p>Продолжительность 18 минут</p>
                        <div style={{"textAlign": "left", "marginTop": "16px"}}>
                            <a href="trainee/training" className="button">Начать тренировку</a>
                            <a href="trainee/training?go=c3ded33617a1ffd51532f5d6f7a6c36d"
                               className="button widget-pulse disabled pull-right" style={{"float": "right"}}>Внести
                                показатели</a>
                            <div className="get-data pull-right" style={{"margin": "0 6px 0 12px"}}>
                                <div className="help" style={{"margin": "0"}}>
                                    <div className="label">?</div>
                                    <div className="info" style={{"width": "300px", "marginTop": "-80px"}}>
                                        <div className="wr-text">
                                            Распечатайте упражнения, если решили потренироваться без приложения. После
                                            тренировки, не забудьте внести показатели!
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <a href="#" className="button print pull-right" data-id="12"
                               title="Распечатайте упражнения, если решили потренироваться без приложения. После тренировки, не забудьте внести показатели!">Распечатать</a>
                        </div>
                    </div>


                </div>

            </div>
        )
    }
})
