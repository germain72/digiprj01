import React from "react";

export default class MonForm03 extends React.Component {
    constructor(props) {
        super(props)
        this.numbers = [10,25,2,0,3]
    }

    creerListe = () => <ol>  {this.creerItems()}   </ol>
    creerItems = () => this.numbers.map(number => <li key={number.toString()}>{number}</li>)

    render() {
       
        return(
            <div>
                {this.creerListe()}
            </div>
        )
    }
}
