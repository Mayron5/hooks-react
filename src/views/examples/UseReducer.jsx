import React, { useReducer, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'

import { initialState, reducer } from '../../store';
import { numberAdd2, login } from '../../store/actions';

const UseReducer = (props) => {

    const [state, dispatch] = useReducer(reducer, initialState);
    const [number, setNumber] = useState(0);

    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />
            <div className="center">
                {state.user ? <span className='text'>{state.user.name}</span> : <span className='text'>Sem usuário</span>}
                <span className="text">{state.number}</span>

                <input type="number" className="input" value={number} onChange={event => setNumber(event.target.value)} />

                <div>
                    <button className='btn' onClick={() => login(dispatch, 'Mayron gostoso')}>Logar</button>
                    <button className='btn' onClick={() => numberAdd2(dispatch)}>+2</button>
                    <button className='btn' onClick={() => dispatch({ type: 'number_plus7' })}>*7</button>
                    <button className='btn' onClick={() => dispatch({ type: 'number_divider25' })}>/25</button>
                    <button className='btn' onClick={() => dispatch({ type: 'number_arrend' })}>Arredondar</button>
                    <button className='btn' onClick={() => dispatch({ type: 'number_add_any', payload: +number })}>Add N</button>
                </div>
            </div>
        </div>
    )
}

export default UseReducer
