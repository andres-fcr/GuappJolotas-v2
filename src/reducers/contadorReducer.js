import { TYPES } from "../actions/contadorActions"

export const contadorInitalState = { contador: 0 }


export function contadorReducer(state, action) {
    switch (action.type) {
        case TYPES.INCREMENT:
            return { contador: state.contador + 1 }
        case TYPES.DECREMENT:
            return { contador: state.contador - 1 }
        case TYPES.RESET:
            return contadorInitalState
        default:
            return state
    }
}
