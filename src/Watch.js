import React, { Component } from 'react';


class Watch extends Component{
    constructor(props){
        super(props);
        this.state = {

            secondsElapsed = 0

        };

        this.getSeconds = this.getSeconds.bind(this);
        this.getMinutes = this.getMinutes.bind(this);
    }

    getSeconds(){

        return ('0' + this.state.secondsElapsed % 60).slice(-2);
    }

    getMinutes(){

        return
    }




    render(){

        return(

            <div>
                <h1>{this.getMinutes()}:{this.getSeconds()}</h1>
                <button type="button" onClick={this.handleStartClick}>start</button>
                <button type="button" onClick={this.handleStopClick}>stop</button>
            </div>
        )
    }
}

export default Watch;