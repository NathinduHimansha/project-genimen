import logo2 from './images/logo2.png';
import './App.css';

    
import {React, Component} from 'react'


export default class Products extends Component {
    componentDidMount(){
        console.log(this.props.data);
    }
    render() {
        return (
            <div className="App">
            <header className="App-header">
            <img src={logo2} className="App-logo2" alt="logo" />
          </header>
          
            <div>
                    {this.props.data.map(img => (
                        <img src={img} />
                ))}
        </div>
        </div>
        )
    }
}