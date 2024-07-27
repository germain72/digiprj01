import React from "react";

export default class MonBody extends React.Component {
    constructor(props) {
        super(props)
        this.state= {chrono:new Date()}
    }

    tick() {
        if( !this.chrono) {
            this.setState(
                {chrono: new Date()}
            )
        }
        else
        {
            this.chrono.setTime(this.state.chrono.getTime()+1000)
        this.setState(
            {chrono:this.chrono}
        )
        }
    }

    componentDidMount() {
        this.timerID = setInterval(
            () =>this.tick(),1000)    
    }

    componentWillUnmount() {
        clearInterval(this.timerID)
    }

    onPause = (e) => {
        console.log(e.target)
        this.chrono = this.state.chrono
        this.componentWillUnmount()
    }
    onStop = (e) => {
        this.chrono = new Date()
        this.componentWillUnmount()
    }
    onStart = (e) => {
        this.componentDidMount()
    }
    onReStart = (e) => {
        this.setState(
            {chrono:this.chrono}
        )
        this.componentDidMount()
    }

    AffButton = (label,action) => <button onClick={action}>{label}</button>


    render() { 
        return ( 
            <div>
                <hr/>
                <h1>CHRONO : {this.state.chrono.toLocaleTimeString()} </h1>
                <hr/>
                {this.AffButton('Start',this.onStart)}<br/>
                {this.AffButton('Stop',this.onStop)}<br/>
                {this.AffButton('Pause',this.onPause)}<br/>
                {this.AffButton('ReStart',this.onReStart)}<br/>
                <hr/>
            </div>
         );
    
 }
}
