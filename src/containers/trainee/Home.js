import React from 'react'
import { Link } from 'react-router'
import Helmet from 'react-helmet'
import { url } from '../../config'

export default React.createClass({
    render() {
        return (
            <div>
                <Helmet title="Мой день" />
                <div className="info-section">
                    <div className="info-title">
                        <div className="sub"></div>
                        <div className="text-title">Рекомендации</div>
                    </div>
                    <div className="counter-calories">
                        <table>
                            <tr>
                                <td className="ind bg-blue"></td>
                                <td className="bg-blue fs60 mw140">2722<div className="abs-text">Ккал</div></td>
                                <td className="bg-blue fs60 mw140">2<div className="abs-text">кг/мес</div></td>
                                <td className="ind bg-blue"></td>
                                <td className="water">
                                    <img src="img/icons/water.png" alt=""/>                </td>
                                <td className="day">3.9<div className="abs-text">литра воды<br/>в день</div></td>
                            </tr>
                        </table>
                    </div>
                </div>

                <div className="info-section">
                    <div className="info-title">
                        <div className="text-title pull-left mob_hidden">Тренировка</div>
                        <Link to="/training" className="button small pull-right start-training-btn" style={{"padding": "5px 25px 0 !important"}}>Начать тренировку</Link>
                    </div>
                    <div className="day-training">
                        <ul className="training-list">
                            <li><Link to="/calendar#training" className="item">
                                <span className="icon"><img src={url("uploads/exercise/icon/46.png")} alt=""/></span>Приседания
                            </Link></li>
                            <li><Link to="/calendar#training" className="item">
                                <span className="icon"><img src={url("uploads/exercise/icon/93.png")} alt=""/></span>Лодочка с прямыми руками вперед
                            </Link></li>
                            <li><Link to="/calendar#training" className="item">
                                <span className="icon"><img src={url("uploads/exercise/icon/97.png")} alt=""/></span>Отжимания широким хватом с колен
                            </Link></li>
                            <li><Link to="/calendar#training" className="item">
                                <span className="icon"><img src={url("uploads/exercise/icon/108.png")} alt=""/></span>Обратные отжимания от стула, колени согнуты
                            </Link></li>
                            <li><Link to="/calendar#training" className="item">
                                <span className="icon"><img src={url("uploads/exercise/icon/61.png")} alt=""/></span>Пресс
                            </Link></li>
                        </ul>
                        <div className="day">
                            <table>
                                <tr>
                                    <td>
                                        <div className="number">
                                            1                        </div>день
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="info-section">
                    <div className="info-title">
                        <div className="text-title">Достижения</div>
                    </div>
                    <div className="notice">
                        <img className="bg-image" src="img/bg_image_1.png"/>
                            <table className="table">
                                <tr>
                                    <td className="w150 pl20 tu">
                                        <div className="fs20 congratulation_text">Поздравляем!</div>
                                        <div className="fflc mob_hidden">У вас новый уровень.</div>
                                    </td>
                                    <td className="user_level"><img src={url("uploads/bages/1.png")}/> </td>
                                    <td className="w150 pr20 tu fflc"></td>
                                </tr>
                            </table>
                    </div>
                </div>
            </div>
        )
    }
})
