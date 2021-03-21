import React, { Component } from 'react';
import Button from '../buttons/Button';
import './logo.css';


class LogoView extends Component {
    render() {
        return (
            <div class="body">

                <div class="login-btn">
                    <Button>Login</Button>
                </div>

            <div class='ripple-background'>
            <div class='circle xxlarge shade1'></div>
            <div class='circle xlarge shade2'></div>
            <div class='circle large shade3'></div>
            <div class='circle mediun shade4'></div>
            <div class='circle small shade5'></div>
            </div>

<div class="welcome-text">
    <div class="animated-title">
    <div class="text-top">
        <div>
        <span>Predict</span>
        <span>Annalyse</span>
        </div>
    </div>
    <div class="text-bottom">
        <div>
        <span>Predict</span>
        <span>Annalyse</span>
        </div>
    
    </div>
    </div>

</div>

<div class="start-button">
                    <Button>Login</Button>
                </div>
                
            </div>
        )
    }
}

export default LogoView
