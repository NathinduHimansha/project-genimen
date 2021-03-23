import React, { Component } from 'react'
import Button from '../../components/buttons/Button';
import './homepage.css';
import Logobanner from './Logobanner';
import LeftArrow from '../../assests/left-arrow.png';

class HomePage extends Component {
    render() {
        return (
            <div class="-mr-50">
                <div class="homepage-body">

                    <div class="homepage-loginbtn">
                        <Button>Login</Button>
                    </div>

                    <div class="homepage-logo">
                        <Logobanner />
                    </div>

                    <div class="homepage-welcometxt">
                        <div class="welcometxt-top">
                            <div>
                                <span>Predict</span>
                                <span>Annalyse</span>
                            </div>
                        </div>
                        <div class="welcometxt-bottom">
                            <div>
                                <span>Design</span>
                            </div>
                        </div>
                    </div>


                        <div class="homepage-start-button">
                        <Button> <img src={LeftArrow} className="homepage-startbtnrow" /> Start </Button>
                </div>


                        
                <div class='homepage-bg-annimation'>
  <div class='hbga-circle circle-xxlargee circle-shade1'></div>
  <div class='hbga-circle circle-xlarge circle-shade2'></div>
  <div class='hbga-circle circle-large circle-shade3'></div>
  <div class='hbga-circle circle-mediun circle-shade4'></div>
  <div class='hbga-circle circle-small circle-shade5'></div>
</div>
                
                    

                    
                    


                </div>  
            </div>
        )
    }
}

export default HomePage
