import React, { Component } from 'react'
import Button from '../../components/buttons/Button';
import './homepage.css';
import Logobanner from './Logobanner';
import LeftArrow from '../../assests/left-arrow.png';

class HomePage extends Component {
    render() {
        return (
            <div class="-mr-50">
                <div class="body">

                    <div class="homepage-loginbtn">
                        <Button>Login</Button>
                    </div>

                    <div class="homepage-logo">
                        <Logobanner />
                    </div>

                    <div class="animated-title">
                        <div class="text-top">
                            <div>
                                <span>Predict</span>
                                <span>Annalyse</span>
                            </div>
                        </div>
                        <div class="text-bottom">
                            <div>
                                <span>Design</span>
                            </div>
                        </div>
                    </div>


                        <div class="start-button">
                        <Button> <img src={LeftArrow} className="dropright-arrow" /> Start </Button>
                </div>


                        
                <div class='ripple-background'>
                        <div class='circle xxlarge shade1'></div>
                        <div class='circle xlarge shade2'></div>
                        <div class='circle large shade3'></div>
                        <div class='circle mediun shade4'></div>
                        <div class='circle small shade5'></div>
                    </div>

                
                    

                    
                    


                </div>  
            </div>
        )
    }
}

export default HomePage
