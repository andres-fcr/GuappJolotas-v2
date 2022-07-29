import React from 'react';
import { Div, Img, Word } from '../styles/NoEncontradoStyles';

const NoEncontrado = () => {
    return ( <Div>
       
       <Word> <h4>Producto no encontrado.
            Realice su búsqueda nuevamente.</h4> </Word>
           
          <Img src="https://res.cloudinary.com/alexa01020304/image/upload/v1643599308/error_olrwxy.png" alt=""/>
    </Div>);
    
};


export default NoEncontrado;


