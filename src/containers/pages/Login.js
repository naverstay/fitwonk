import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
    render() {
        return (
            <div>
                <div className="page-width">
                    <div className="page-bg"></div>
                </div>
                <div className="header">
                    <div className="page-width">
                        <ul className="header-menu">
                        </ul>
                    </div>
                </div>
                <div className="page-width">

                    {/* alert block */}

                    <form id="login-form" action="site/login" method="post" role="form">
                        <input type="hidden" name="_csrf" value="Q0Z3TXVZNTEsJRwaWBcBeHYVIAYyLHt1MwImCjcwZ2AxCwIjKhh5Xg=="/><div className="login-page">
                            <div className="logo"></div>
                            <div className="login" id="loginForm">
                                <div className="title">E-mail:</div>
                                <div className="wr-input"><div className="form-group field-loginform-email required">
                                    <label className="control-label" htmlFor="loginform-email"></label>
                                    <input type="text" id="loginform-email" className="form-control" name="LoginForm[email]"/>

                                        <p className="help-block help-block-error"></p>
                                </div></div>
                                <div className="title">Пароль:</div>
                                <div className="wr-input"><div className="form-group field-loginform-password required">
                                    <label className="control-label" htmlFor="loginform-password"></label>
                                    <input type="password" id="loginform-password" className="form-control" name="LoginForm[password]"/>

                                        <p className="help-block help-block-error"></p>
                                </div></div>
                                <div className="login-menu">
                                    <Link to="/registration">Регистрация</Link>            <Link to="password-reset">Забыли пароль?</Link>        </div>
                                <input type="submit" value="Войти в личный кабинет" />

                                <div className="login-soc">
                                    <div id="w0" className="auth-clients">            <a className="vkontakte auth-link" href="site/auth?authclient=vkontakte" data-popup-width="650" data-popup-height="350"><span className="auth-icon vkontakte"></span><span className="auth-title">Войти через<br/>vkontakte</span></a>            <a className="facebook auth-link" href="site/auth?authclient=facebook" data-popup-width="860" data-popup-height="480"><span className="auth-icon facebook"></span><span className="auth-title">Войти через<br/>facebook</span></a></div>        </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
})
