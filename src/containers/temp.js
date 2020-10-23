import React, { Component } from "react";

export default class NewCounter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }
    
    increment = () => {
        this.setState( (previousState) => ({ 
          count: previousState.count + 1 }));
    }

    render() {
        return (
            <div>
            <button onClick={this.increment}>Increment</button>
            {this.state.count}
            </div>
        )
    }
}