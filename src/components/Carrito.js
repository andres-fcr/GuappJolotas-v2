import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Carro, Carito, Foto, Titulo, BotonC } from '../styles/CarritoStyles';
import { Div } from '../styles/LoginStyles';
import { Flecha } from '../styles/SliderStyles';

const Carrito = () => {
  return (
  <Div>
   <Carito>
     <Titulo> <p>Carrito</p> </Titulo>
     <Link to="/producto">
        <Flecha
          src="https://res.cloudinary.com/dbyw7mbt6/image/upload/v1643496365/guappjolotas/Vector_a8gtlb.png"
          alt="back"
        />
      </Link>

      <Carro>
       <Foto src='https://res.cloudinary.com/vrilli/image/upload/v1643945289/Group_66_ryfy86.png' alt=''/>
       </Carro>
      <BotonC> <Button variant="primary">Pagar</Button> </BotonC>

   </Carito>
   </Div>
   );
};

export default Carrito;























// import { render } from '@testing-library/react';
// import accounting from 'accounting';
// import React from 'react';
// import { Button } from 'react-bootstrap';



// const Carrito = ({buscado}) => {

//     const clave = "productos";
//     const productos = obtener();

//     const guardar = () => {
//         localStorage.setItem(clave, JSON.stringify(productos));
//     }

//     const obtener = () => {
//         const productosCodificados = localStorage.getItem(clave);
//         return JSON.parse(productosCodificados) || [];
//     }

//     const existe = (id) => {
//         return productos.find(producto => producto.id === id);
//     }

//     const agregar = (buscado) => {
//         if (!existe(buscado.id)) {
//             productos.push(buscado);
//             guardar();
//         }
//     }

//     const quitar = (id) => {
//         const indice = productos.findIndex(p => p.id === id);
//         if (indice != -1) {
//             productos.splice(indice, 1);
//             guardar();
//         }
//     }


// };

// export default Carrito;






//CREANDO EL CARRITO CON REACT

// import React, { useReducer } from 'react';
// import { carritoInicialState, carritoReducer } from '../reducers/CarritoReducer';
// import ProductItem from './ProductItem';

// const Carrito = () => {
//     const [state, dispatch] = useReducer(carritoReducer, carritoInicialState);

//     const { produc, cart } = state;

//     const addToCart = (id) => {
//         console.log(id);
//     };

//     const delFromCart = () => { };

//     const clearCart = () => { };

//     return (

//         <div>
//             <h2>Carrito</h2>
//             <h3>Productos</h3>
//             <article className='box'>
//                 {produc.map((product) => (
//                     <ProductItem key={product.id} data={product} addToCard={addToCart} />
//                 ))}
//             </article>
//             <h3>Carrito</h3>
//             <article className='box'></article>
//         </div>

//     );
// };

// export default Carrito;

