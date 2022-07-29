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
        <div className="row align-items-end">
            <div className='col '>
                <Button variant="outline-dark" onClick={handleSubstract} className="my-auto float-end mb-1">
                    -
                </Button>
            </div>
            <div className="col mw-25">
                <h1 className='my-auto text-center'>{state.contador}</h1>
            </div>
            <div className='col'>
                <Button variant="outline-dark " onClick={handleAdd} className="mb-1" >
                    +
                </Button>
            </div>
        </div>
    );
}

export default Counter;