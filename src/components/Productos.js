import React, { useState } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs'

const Productos = ({ tarea }) => {

  const [lista, setLista] = useState("Guajalotes");

  const filtered = tarea.filter(function (element) {
    return element.clase === lista;
  });

  return (
    <div className='container-sm w-100 mw-auto bg-light shadow p-4 p-sm-5 my-sm-5 rounded'>

      <div className='row mb-5'>
        <div className='col'>
          <img src="https://res.cloudinary.com/dbyw7mbt6/image/upload/v1642700045/guappjolotas/logo_a9tk2c.png" alt='logo' width={80} height="auto"
          />
        </div>
       
        <div className='col'>
          <img src="https://res.cloudinary.com/dbyw7mbt6/image/upload/v1643496426/guappjolotas/shopping-cart_pbl62y.png" alt="carrito" width={35} height="auto" className='pt-4 float-end' />
        </div>
      </div>
      <div className='fs-3 mb-5 text-start fw-bold text-wrap w-75' >
        Nada como una Guajolota para empezar el dia :D
      </div>

      <InputGroup className='mb-5'>
        <InputGroup.Text id="basic-addon1"><BsSearch /></InputGroup.Text>
        <Form.Control
          placeholder="Sabor de guajolota o bebida"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>


      <div className='row'>
        <div className='col'>
          <Button
            className='ms-2 ms-sm-5'
            variant="link"
            onClick={() => setLista("Guajalotes")}
          >
            Guajalotas
          </Button>
        </div>
        <div className='col'>
          <Button
            className='ms-2 ms-sm-5'
            variant="link"
            onClick={() => setLista("Tamales")}
          >
            Tamales
          </Button>
        </div>
        <div className='col'>
          <Button
            className='ms-2 ms-sm-5'
            variant="link"
            onClick={() => setLista("Bebidas")}
          >
            Bebidas
          </Button>
        </div>
      </div>

      <ul className='list-group'>
        {
          filtered.map(product => (
            <Button as={Link} to={`/detalle/${product.clase}${product.id}`} key={product.id} variant='primar' className='my-2'>
              <div >
                <div className="row">
                  <div className="col">
                    <img
                      className=''
                      variant="top" src={product.imagen} width={100} alt={product.name} />
                  </div>
                  <div className="col my-auto">
                    <div
                      className='fw-bold text-dark'>
                      {product.name}
                    </div>
                    <div
                      className='fw-bold precio'>
                      ${product.precio} MXN
                    </div>
                  </div>
                </div>
              </div >
            </Button>
          ))
        }
      </ul>
    </div >
  );
};

export default Productos;
