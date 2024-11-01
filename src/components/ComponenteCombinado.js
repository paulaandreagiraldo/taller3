import React, { Component } from 'react';

class ComponenteCombinado extends Component {
    constructor(props) {
        super(props);
        this.state = {
            valor: 0,
        };
    }

    componentDidMount() {
        console.log('Componente combinado montado');
    }

    componentDidUpdate() {
        console.log(`Valor actualizado a: ${this.state.valor}`);
    }

    componentWillUnmount() {
        console.log('Componente combinado desmontado');
    }

    cambiarValor = () => {
        this.setState(prevState => ({ valor: prevState.valor + 1 }));
    };

    render() {
        return (
            <div className="p-4">
                <h2 className="text-xl">Valor: {this.state.valor}</h2>
                <button 
                    onClick={this.cambiarValor} 
                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700"
                >
                    Cambiar Valor
                </button>
            </div>
        );
    }
}

export default ComponenteCombinado;
