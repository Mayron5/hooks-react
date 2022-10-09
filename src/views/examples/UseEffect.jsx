import React from 'react'
import { useState, useEffect } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

function calcFatorial(num) {

    const number = +num

    if (number < 0) return -1;
    if (number === 0) return 1;

    return calcFatorial(number - 1) * number;

}

function isPar(number) {
    return number % 2 === 0 ? 'Par' : 'Impar';
}

const UseEffect = (props) => {

    const [number, setNumber] = useState(1)
    const [fatorial, setFatorial] = useState(1)
    const [status, setStatus] = useState(isPar(number))

    useEffect(() => {
        setFatorial(calcFatorial(number));
        setStatus(isPar(number));
    }, [number]);

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />

            <SectionTitle title="Exercício #01" />
            <div className="center">
                <div>
                    <span className='text'>Fatorial: </span>
                    <span className='text red'>{fatorial < 0 ? 'Não existe' : fatorial}</span>
                </div>
                <input
                    type="number"
                    className="input"
                    value={number}
                    onChange={event => setNumber(event.target.value)}
                />
            </div>

            <SectionTitle title="Exercício #02" />
            <div className="center">
                <div>
                    <span className="text">Status: </span>
                    <span className="text red">{status}</span>
                </div>
            </div>
        </div>
    )
}

export default UseEffect
