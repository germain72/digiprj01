import React from "react"

class Tick extends React.Component {
    constructor(props) {
        super(props)
        this.state= {date:new Date()}
    }
/**
 * Appel dû à un événement :
 * Lorque je le monte le composant
 * après l'appel du constructor 
 */
    componentDidMount() {
        this.timerID = setInterval(
            () =>this.tick(),1000)
    }

/**
 * Appel dû ç un événement :
 * lorsque je veux détruire (démonter le composant)
 * on appelle avant la méthode suivante :
 */
    componentWillUnmount() {
        clearInterval(this.timerID)
    }

    tick() {
       // IMPOSSIBLE : this.state={date:new Date()}
        this.setState(
            {date:new Date()}
        )
    }

    onStop  = (e)=>{this.componentWillUnmount()}
    onStart = (e)=>{this.componentDidMount()}

    render()
    {
    return (
      <div>
        <h1>{this.props.message}</h1>
        <h2>Il est 
         {this.state.date.toLocaleTimeString()}.
        </h2>
        <button onClick={this.onStop}>Stop</button>
        <br/>
        <button onClick={this.onStart}>Start</button><br/>
        <br/>
        <button onClick={this.props.cb}>App</button>
      </div>
     )
    }
  }

  export default Tick