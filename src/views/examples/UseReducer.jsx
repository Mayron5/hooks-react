import React, { useReducer, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'

const initialState = {
    cart: [],
    products: [],
    user: null,
    // Foco
    number: 0,

};

const reducer = (state, action) => {

    switch (action.type) {
        case 'number_add2':
            return { ...state, number: state.number + 2 }
        case 'number_plus7':
            return {...state, number: state.number * 7}
        case 'number_divider25':
            return {...state, number: state.number / 25}
        case 'number_arrend':
            return {...state, number: Math.round(state.number)}
        case 'number_add_any':
            return {...state, number: state.number + action.payload}
        case 'login':
            return { ...state, user: { name: action.payload } }
        default:
            return state;
    }
}

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
                    <button className='btn' onClick={() => dispatch({ type: 'login', payload: 'Mayron gostoso.' })}>Logar</button>
                    <button className='btn' onClick={() => dispatch({ type: 'number_add2' })}>+2</button>
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
