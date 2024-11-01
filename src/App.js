import React from 'react';
import Contador from './components/Contador';
import CicloVida from './components/CicloVida';
import ComponenteCombinado from './components/ComponenteCombinado';

const App = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl mb-4">Ejercicios de React</h1>

            <h2 className="text-xl mb-2">Ejercicio 1: Contador Simple</h2>
            <Contador />

            <h2 className="text-xl mt-4 mb-2">Ejercicio 2: Ciclo de Vida</h2>
            <CicloVida />

            <h2 className="text-xl mt-4 mb-2">Componente Combinado</h2>
            <ComponenteCombinado />
        </div>
    );
};

export default App;
