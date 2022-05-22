import '../../assets/css/fonts.css';

import React from 'react';
import Card from '../common/Card.js';
import './login.css';

class Login extends React.Component {

    cardContent() {
        return (
            <div className="login-card">
                <div className="login-card-content">
                    <div className="login-card-header">
                        <h1>Logg inn</h1>
                    </div>
                    <div className="login-card-main">
                        <div className="content-text">Vennligst logg inn for å få tilgang til brukerveiledning</div>
                        
                        <label>Brukernavn</label>
                        <input placeholder="Brukernavn" type="text"/>

                        <label>Passord</label>
                        <input placeholder="Passord" type="text"/>

                        <button type="button">Logg inn</button>
                    </div>
                </div>
            </div>
        )
    }
    render() {
        return (

            <div className="container">
                <div className="content">
                    <div className="login">
                        <Card border={false} content={this.cardContent()} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
