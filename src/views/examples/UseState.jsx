import React from 'react';
import { useState } from 'react';

import PageTitle from '../../components/layout/PageTitle';
import SectionTitle from '../../components/layout/SectionTitle';

const UseState = (props) => {

    const [valor, setValor] = useState(0);
    const [name, setName] = useState('Mayron gostoso')

    return (
        <div className="UseState">
            <PageTitle
                title="Hook UseState"
                subtitle="Estado em componentes funcionais!"
            />

            <SectionTitle title="Exercício #01" />
            <div className="center">
                <span className="text">{valor}</span>
                <div>
                    <button className="btn" onClick={ _ => setValor(valor + 1)}>+1</button>
                    <button className="btn" onClick={ _ => setValor(valor - 1)}>-1</button>
                    <button className="btn" onClick={ _ => setValor(current => current + 1000)}>+1000</button>
                    <button className="btn" onClick={ _ => setValor(current => current - 1000)}>-1000</button>
                </div>
            </div>

            <SectionTitle title="Exercício #02" />
            <input type="text" className="input" value={name} onChange={event => setName(event.target.value)} /> {/* Componente controlado */}
            <span className="text">{name}</span>
        </div>
    );
};

export default UseState;
