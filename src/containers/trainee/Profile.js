import React from 'react'
import Helmet from 'react-helmet'

export default React.createClass({
    render() {
        return (
            <div>
                <Helmet title="Настройки" />
                <div className="info-section">
                    <div className="info-title">
                        <div className="sub"></div>
                        <div className="text-title">aovechkin</div>
                    </div>
                    <div className="user-info">
                        <div className="user-block">
                            <a className="border-avatar">
                                <span className="wr-img">
                                    <img src="img/no-avatar.jpg" alt=""/>                                </span>
                                <span className="user-label">
                                    <img src="uploads/bages/1.png" alt=""/>                                </span>
                            </a>
                        </div>
                        <div className="info-table">
                            <table>
                                <tbody>
                                    <tr>
                                        <td>
                                            <div className="info">
                                                <span className="title">Возраст:</span>
                                            <span className="editMe edit_v1">
                                            46 лет 
                                            </span>
                                            </div>
                                            <div className="info">
                                                <span className="title">Город:</span>
                                                <span className="editMe edit_v1"></span>
                                            </div>
                                            <div className="info">
                                                <span className="title">День рождения:</span>
                                                <span className="editMe edit_v1">01.01.1970</span>
                                            </div>
                                            <div className="info">
                                                <span className="title">Рост:</span>
                                                <span className="editMe edit_v1">175 см</span>
                                            <span style={{"marginLeft": "12px"}}>
                                                <span className="title">Вес:</span> 
                                                <span className="editMe edit_v1">98 кг</span>
                                            </span>
                                            </div>
                                            <div className="info">
                                                <span className="title">Интересы:</span>
                                                <span className="editMe edit_v1"></span>
                                            </div>
                                            <div className="info">
                                                <span className="title">Программа:</span>
                                                <span className="editMe edit_v1">Набор силы</span>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <div className="info-section">
                    <div className="info-title">
                        <div className="sub mob_hidden">Вы с нами уже 17 дней</div>
                        <div className="sub dt_hidden">17 дней с Fitwonk</div>
                        <div className="text-title">АККАУНТ</div>
                    </div>
                    <div className="personal-data">
                        <div className="half">
                            <div className="wr-input">
                                <div className="title">Имя:</div>
                                <div className="form-group field-user-name">
                                    <input type="text" id="user-name" className="form-control" name="User[name]" value="aovechkin"/>
                                        <div className="help-block"></div>
                                </div>                </div>
                            <div className="wr-input mob_hidden">
                                <div className="title">E-mail:</div>
                                <div className="form-group field-user-email required">

                                    <input type="text" id="user-email" className="form-control" name="User[email]" value="aovechkin@mail.ru" readOnly/>

                                        <div className="help-block"></div>
                                </div>                </div>
                        </div>
                        <div className="half mob_hidden">
                            <div className="title">Фото:</div>
                            <div className="button-upload">Обзор<div className="form-group field-user-avatar_file">

                                <input type="hidden" name="User[avatar_file]" value=""/><input type="file" id="user-avatar_file" name="User[avatar_file]"/>

                                    <div className="help-block"></div>
                            </div></div>
                            <div className="photo active">
                                <img className="default" src="img/no-avatar.jpg" alt=""/>                </div>
                        </div>
                        <div className="switch-place mob_hidden">
                            <div className="wr-input">
                                <div className="title">Интересы:</div>
                                <div className="form-group field-userinfo-interests">

                                    <input type="text" id="userinfo-interests" className="form-control" name="UserInfo[interests]"/>

                                        <div className="help-block"></div>
                                </div>                </div>
                        </div>
                        <div className="switch-place mob_hidden">
                            <div className="switch ">
                                <div></div>
                                <span className="true">Тренируюсь</span>
                                <span className="false">Отдыхаю</span>
                            </div>
                            <div className="form-group field-user-training_status">
                                <label className="control-label" htmlFor="user-training_status"></label>
                                <input type="hidden" id="user-training_status" className="form-control" name="User[training_status]" value="0"/>

                                    <div className="help-block"></div>
                            </div>            </div>
                    </div>
                </div>

                <form id="w0" className="personal-data" action="site/save-user-info" method="post" encType="multipart/form-data">
                    <input type="hidden" name="_csrf" value="MkRmbDdpNlddJw07GicCHgcXMSdwHHgTQgA3K3UAZAZACRMCaCh6OA=="/>    
                    <div className="info-section mob_hidden">
                        <div className="info-title table-row-switcher">
                            <div className="sub">Последний замер 15.08.2016</div>
                            <div className="text-title">Антропометрия</div>
                        </div>
                        <div className="list-item">
                            <div className="get-data table-row-switcher">
                                <div className="data w75">
                                    <div className="wr">
                                        <select name="birthday_year" className="custom">
                                            <option value="1946">1946</option>
                                            <option value="1947">1947</option>
                                            <option value="1948">1948</option>
                                            <option value="1949">1949</option>
                                            <option value="1950">1950</option>
                                            <option value="1951">1951</option>
                                            <option value="1952">1952</option>
                                            <option value="1953">1953</option>
                                            <option value="1954">1954</option>
                                            <option value="1955">1955</option>
                                            <option value="1956">1956</option>
                                            <option value="1957">1957</option>
                                            <option value="1958">1958</option>
                                            <option value="1959">1959</option>
                                            <option value="1960">1960</option>
                                            <option value="1961">1961</option>
                                            <option value="1962">1962</option>
                                            <option value="1963">1963</option>
                                            <option value="1964">1964</option>
                                            <option value="1965">1965</option>
                                            <option value="1966">1966</option>
                                            <option value="1967">1967</option>
                                            <option value="1968">1968</option>
                                            <option value="1969">1969</option>
                                            <option value="1970" selected="defaultValue">1970</option>
                                            <option value="1971">1971</option>
                                            <option value="1972">1972</option>
                                            <option value="1973">1973</option>
                                            <option value="1974">1974</option>
                                            <option value="1975">1975</option>
                                            <option value="1976">1976</option>
                                            <option value="1977">1977</option>
                                            <option value="1978">1978</option>
                                            <option value="1979">1979</option>
                                            <option value="1980">1980</option>
                                            <option value="1981">1981</option>
                                            <option value="1982">1982</option>
                                            <option value="1983">1983</option>
                                            <option value="1984">1984</option>
                                            <option value="1985">1985</option>
                                            <option value="1986">1986</option>
                                            <option value="1987">1987</option>
                                            <option value="1988">1988</option>
                                            <option value="1989">1989</option>
                                            <option value="1990">1990</option>
                                            <option value="1991">1991</option>
                                            <option value="1992">1992</option>
                                            <option value="1993">1993</option>
                                            <option value="1994">1994</option>
                                            <option value="1995">1995</option>
                                            <option value="1996">1996</option>
                                            <option value="1997">1997</option>
                                            <option value="1998">1998</option>
                                            <option value="1999">1999</option>
                                            <option value="2000">2000</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="data w125">
                                    <div className="wr">
                                        <select name="birthday_month" className="custom">
                                            <option value="01" selected="defaultValue">Январь</option>
                                            <option value="02">Февраль</option>
                                            <option value="03">Март</option>
                                            <option value="04">Апрель</option>
                                            <option value="05">Май</option>
                                            <option value="06">Июнь</option>
                                            <option value="07">Июль</option>
                                            <option value="08">Август</option>
                                            <option value="09">Сентябрь</option>
                                            <option value="10">Октябрь</option>
                                            <option value="11">Ноябрь</option>
                                            <option value="12">Декабрь</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="data w60">
                                    <div className="wr">
                                        <select name="birthday_date" className="custom">
                                            <option value="01" selected="defaultValue">01</option>
                                            <option value="02">02</option>
                                            <option value="03">03</option>
                                            <option value="04">04</option>
                                            <option value="05">05</option>
                                            <option value="06">06</option>
                                            <option value="07">07</option>
                                            <option value="08">08</option>
                                            <option value="09">09</option>
                                            <option value="10">10</option>
                                            <option value="11">11</option>
                                            <option value="12">12</option>
                                            <option value="13">13</option>
                                            <option value="14">14</option>
                                            <option value="15">15</option>
                                            <option value="16">16</option>
                                            <option value="17">17</option>
                                            <option value="18">18</option>
                                            <option value="19">19</option>
                                            <option value="20">20</option>
                                            <option value="21">21</option>
                                            <option value="22">22</option>
                                            <option value="23">23</option>
                                            <option value="24">24</option>
                                            <option value="25">25</option>
                                            <option value="26">26</option>
                                            <option value="27">27</option>
                                            <option value="28">28</option>
                                            <option value="29">29</option>
                                            <option value="30">30</option>
                                            <option value="31">31</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="data-title">День рождения</div>
                            </div>
                        </div>
                        <div className="list-item">
                            <div className="get-data">
                                <div className="data"><div className="info-text">2722</div></div>
                                <div className="data-title">Норма калорий в день</div>
                            </div>
                        </div>
                        <div className="list-item">
                            <div className="get-data">
                                <div className="data"><div className="info-text">3.9 л.</div></div>
                                <div className="data-title">Гидратация <span>(количество воды, которое нужно выпивать в день)</span></div>
                            </div>
                        </div>
                        <div className="list-item">
                            <div className="get-data">
                                <div className="data"><div className="info-text">174 уд/мин</div></div>
                                <div className="data-title">Частота сердечных сокращений</div>
                            </div>
                        </div>
                        <div className="list-item">
                            <div className="get-data">
                                <div className="data"><div className="info-text">62.5 кг</div></div>
                                <div className="data-title">Идеальный вес</div>
                            </div>
                        </div>
                        <div className="list-item">
                            <div className="get-data">
                                <div className="data"><div className="info-text">20.08.2016 (<a href="payment">Продлить подписку</a>)</div></div>
                                <div className="data-title">Окончание подписки</div>
                            </div>
                        </div>
                        <div className="text-center" style={{"marginBottom": "27px"}}>
                            <button type="submit" className="button">Сохранить</button>        </div>
                    </div>
                </form>
            </div>
        )
    },
    componentDidMount() {
        initEdit();
    }
})
