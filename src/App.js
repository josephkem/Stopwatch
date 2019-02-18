import React, { Component } from 'react';
import './App.css';
import {Jumbotron,Row,Container,Button } from 'reactstrap';



class App extends Component {
constructor(props){
    super(props);
    this.state = {

        secondsElapsed: 0,
        laps: []

    };

    this.getSeconds = this.getSeconds.bind(this);
    this.getMinutes = this.getMinutes.bind(this);
    this.handleStartClick = this.handleStartClick.bind(this); // SEE BIND
    this.handleStopClick = this.handleStopClick.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleLap = this.handleLap.bind(this);
}

getSeconds(){

    return ('0' + this.state.secondsElapsed % 60).slice(-2); //SEE SLICE 
}

getMinutes(){

    return Math.floor('0' + this.state.secondsElapsed/60)
}



handleStartClick (){

  this.incrementer =  setInterval ( () => {

        this.setState({secondsElapsed:(this.state.secondsElapsed + 1)});
    } , 1000)
    
}

handleStopClick (){

    clearInterval(this.incrementer);
    this.setState({lastClearedIncrementer: this.incrementer});
    
}

handleReset (){

    clearInterval(this.incrementer);
    this.setState({secondsElapsed: 0}) 
}

handleLap (){

    
    this.setState({laps: this.state.laps.concat([this.state.secondsElapsed])});

}

render(){

    return(

        <div>

            <Container>

                <Jumbotron id="big">

                <h1>
                    StopWatch
                </h1>

                </Jumbotron>
            
            
            </Container>

            <Container>

                 <h2>{this.getMinutes()}:{this.getSeconds()}</h2>
            {(this.state.secondsElapsed === 0 || this.incrementer === this.state.lastClearedIncrementer)

                ? <Button outline color="success"  size="lg"  onClick={this.handleStartClick}>Start</Button>

                : <Button outline color="danger"  size="lg"  onClick={this.handleStopClick}>Stop</Button>
            
            }

            {(this.state.secondsElapsed !== 0)

                ? <Button outline color="warning" size="lg"  onClick={this.handleLap}>Lap</Button>

                : null 
           } 

            {(this.state.secondsElapsed !== 0)

                ? <Button outline color="primary" size="lg"  onClick={this.handleReset}>Reset</Button>

                : null 
           } 

              

           <ul>
               {this.state.laps.map(function (lap, i){

                   return <li><strong>{i+1}</strong> - {lap}</li>

               })}
           </ul>
            
            
            </Container>

                

           

        </div>
    )
}
}

export default App;