export const reducer = (state, action) => {

    switch (action.type) {
        case 'numberAdd2':
            return { ...state, number: state.number + 2 }
        case 'number_plus7':
            return { ...state, number: state.number * 7 }
        case 'number_divider25':
            return { ...state, number: state.number / 25 }
        case 'number_arrend':
            return { ...state, number: Math.round(state.number) }
        case 'number_add_any':
            return { ...state, number: state.number + action.payload }
        case 'login':
            return { ...state, user: { name: action.payload } }
        default:
            return state;
    }
}