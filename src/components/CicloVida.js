import React, { Component } from 'react';

class CicloVida extends Component {
    componentDidMount() {
        console.log('Componente montado');
    }

    componentDidUpdate() {
        console.log('Componente actualizado');
    }

    componentWillUnmount() {
        console.log('Componente desmontado');
    }

    render() {
        return (
            <div className="p-4">
                <h2 className="text-xl">Observa la consola para ver los mensajes del ciclo de vida.</h2>
            </div>
        );
    }
}

export default CicloVida;
