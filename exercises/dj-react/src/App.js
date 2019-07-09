import React, {Component} from 'react';
import Display from './Display.js';
import  Controls from './Controls.js';

class App extends Component {
      constructor() {
          super ()
          this.state ={
            counter: 0
           }
         }

      increment =() =>{
        this.setState({
          counter:
            this.state.counter +1
        })
      } 
      
      decrement =() =>{
        this.setState({
          counter:
            this.setState.counter +1

        })
      }

      multiply =() =>{
        this.setState({
          counter:
            this.setState.counter *2 
        })
      }

      render(){
        return(
          <div>
            <display counter=
            {this.state.counter}/>
            <Controls 
                increment={this.increment} 
                decrement={this.decrement}
                multiply={this.multiply}/>
        </div>
    )
}
}





export default App
