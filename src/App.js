import React, { Component } from 'react';
import './App.css';
import {Jumbotron,Container,Button } from 'reactstrap';



class App extends Component {
constructor(props){
    super(props);
    this.state = {

        secondsElapsed: 0,
        hoursElapsed:0,
        laps: []

    };

    this.getSeconds = this.getSeconds.bind(this);
    this.getMinutes = this.getMinutes.bind(this);
    this.getHours = this.getHours.bind(this);
    this.handleStartClick = this.handleStartClick.bind(this); // SEE BIND
    this.handleStopClick = this.handleStopClick.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleLap = this.handleLap.bind(this);
} 

getSeconds(){
    if(this.state.secondsElapsed === 3600) {
        this.setState({secondsElapsed:0})
    }

    return ('0' + this.state.secondsElapsed % 60).slice(-2); //SEE SLICE 
}

getMinutes(){

     return Math.floor(this.state.secondsElapsed/60);
}

getHours() {
    if(this.state.secondsElapsed === 3600) {
        this.setState({hoursElapsed:(this.state.hoursElapsed + 1)})
    }
    return Math.floor(this.state.hoursElapsed);
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
    var elem = document.getElementById('laplist');
    clearInterval(this.incrementer);
    this.setState({secondsElapsed: 0}) ;
    this.setState({hoursElapsed:0});
    elem.parentNode.removeChild(elem);
    
    
 
}

handleLap (){

    var sec = (this.getSeconds()).toString();
    var min = (this.getMinutes()).toString();
    var hr = (this.getHours()).toString();
    var time = hr.concat(" : ",min," : ",sec);
    this.setState({laps: this.state.laps.concat([time])});

}

render(){

    return(

        <div>

            <Container>

                <Jumbotron id="big">

                <h1>
                    Stopwatch
                </h1>

                </Jumbotron>
            
            
            </Container>

            <h2>{this.getHours()}:{this.getMinutes()}:{this.getSeconds()}</h2>

            <Container id="btns">

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
            </Container>

            <Container id="lap">
                
             <ul id = "laplist">
               {this.state.laps.map(function (lap, i){

                   return <li>{lap}</li>

               })}
            </ul>
            
            
            </Container>

                

           

        </div>
    )
}
}

export default App;