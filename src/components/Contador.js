import React, { Component } from 'react';

class Contador extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
    }

    incrementar = () => {
        this.setState(prevState => ({ count: prevState.count + 1 }));
    };

    render() {
        return (
            <div className="p-4">
                <h2 className="text-xl">Contador: {this.state.count}</h2>
                <button 
                    onClick={this.incrementar} 
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                    Incrementar
                </button>
            </div>
        );
    }
}

export default Contador;
