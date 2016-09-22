import React from 'react'

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

                    <form id="request-password-reset-form" action="/site/request-password-reset" method="post" role="form">
                        <input type="hidden" name="_csrf" value="MVFKUEpJSVlAKCc0KXsMLkhkDWJzJx0IU2UFMQskGDtmIzAdJwsRPQ=="/><div className="login-page">
                            <div className="logo"></div>
                            <div className="forgot" id="forgotForm">
                                <div className="title">Ваш e-mail:</div>
                                <div className="wr-input"><div className="form-group field-passwordresetrequestform-email required">
                                    <label className="control-label" for="passwordresetrequestform-email"></label>
                                    <input type="text" id="passwordresetrequestform-email" className="form-control" name="PasswordResetRequestForm[email]"/>

                                        <p className="help-block help-block-error"></p>
                                </div></div>
                                <div className="text">На ваш e-mail адрес будут высланы инструкции для восстановления пароля</div>
                                <input type="submit" value="Напомнить"/>
                            </div>
                        </div>
                    </form>
                </div>

            </div>
        )
    }
})
