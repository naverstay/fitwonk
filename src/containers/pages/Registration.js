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

                    <form id="form-signup" action="/site/signup" method="post" role="form">
                        <input type="hidden" name="_csrf" value="dG5MVXdsLnMFFyExFF5rBA1bC2dOAnoiFloDNDYBfxEjHDYYGi52Fw=="/><div className="login-page">
                            <div className="logo"></div>
                            <div className="registry" id="registryForm">
                                <div className="title">Ваш e-mail:</div>
                                <div className="wr-input"><div className="form-group field-signupform-email required">
                                    <label className="control-label" for="signupform-email"></label>
                                    <input type="text" id="signupform-email" className="form-control" name="SignupForm[email]"/>

                                        <p className="help-block help-block-error"></p>
                                </div></div>
                                <div className="text hide">На Ваш e-mail адрес будет отправлено письмо со ссылкой на анкету</div>
                                <input type="submit" value="Зарегистрироваться" />

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
