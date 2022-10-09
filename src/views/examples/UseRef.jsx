import React from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

function mergeStrings(value_01 = '', value_02 = '') {

    let response = '';

    const converted1 = [...value_01].reverse();
    const converted2 = [...value_02].reverse();

    while (converted1.length > 0 || converted2.length > 0) {
        response += converted1.pop() || '';
        response += converted2.pop() || '';
    }

    return response;
}

const UseRef = (props) => {

    const [value1, setValue1] = useState("");
    const [value2, setValue2] = useState("");

    const count = useRef(0);

    const input1 = useRef(null);
    const input2 = useRef(null); // Consigo referencia um elemente do html, isso ajuda mt, parecido com o viewChield do angular

    useEffect(() => {
        count.current++;
        input2.current.focus();
    }, [value1])

    useEffect(() => {
        count.current++;
        input1.current.focus();
    }, [value2])

    return (
        <div className="UseRef">
            <PageTitle
                title="Hook UseRef"
                subtitle="Retorna um objeto mutável com a propriedade .current!"
            />

            <SectionTitle title="Exercício #01" />
            <div className="center">
                <div>
                    <span className="text">Valor:</span>
                    <span className="text">{mergeStrings(value1, value2)}</span>
                    <span className="text red">[{count.current}]</span>
                </div>
                <input type="text" className="input"
                    ref={input1}
                    value={value1}
                    onChange={event => setValue1(event.target.value)}
                />
            </div>

            <SectionTitle title="Exercício #02" />
            <div className="center">
                <input type="text" className="input"
                    ref={input2}
                    value={value2}
                    onChange={event => setValue2(event.target.value)}
                />
            </div>
        </div>
    )
}

export default UseRef
