import React, { Component } from 'react'
import ReactToast from './ReactToast';

class ReactToast2 extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             val:false
        }
    }
    

    add = () =>{
        console.log("add"),
        this.setState({
            val:true
        })

    }

    
    render() {
        return (
            <div class="-ml-70">
                <button onClick={this.add}>Test</button>
               {this.state.val==true?
               <ReactToast dataFromParent="a" type="info" message="done huththo" close={true} timeout={5000}/> : null}
                    
            </div>
        )
    }
}

export default ReactToast2
