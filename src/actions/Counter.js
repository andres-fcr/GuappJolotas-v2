import React, { useReducer } from 'react';
import { Button } from 'react-bootstrap';
import { contadorInitalState, contadorReducer } from '../reducers/contadorReducer';
import { Sumador } from '../styles/SliderStyles';
import { TYPES } from './contadorActions';

const Counter = () => {

    const [state, dispatch] = useReducer(contadorReducer, contadorInitalState);
    const handleSubstract = () => {
        dispatch({ type: TYPES.DECREMENT })
    }
    const handleAdd = () => {
        dispatch({ type: TYPES.INCREMENT })
    }
    
    return (
        <Sumador className="mb-2">
            <Button variant="primary" onClick={handleSubstract}>
                -
            </Button>
            <h1>{state.contador}</h1>
            <Button variant="primar" onClick={handleAdd} >
                +
            </Button>
        </Sumador>
    );
}

export default Counter;