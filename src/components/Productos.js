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
    <div className='container-sm bg-light shadow p-5 my-5 rounded'>

      <div className='row mb-5'>
        <div className='col'>
          <img src="https://res.cloudinary.com/dbyw7mbt6/image/upload/v1642700045/guappjolotas/logo_a9tk2c.png" alt='logo' width={80} height="auto"
          />
        </div>
        <div className='col'></div>
        <div className='col'></div>
        <div className='col'></div>
        <div className='col'>
          <img src="https://res.cloudinary.com/dbyw7mbt6/image/upload/v1642700043/guappjolotas/carrito_mlxzjd.png" alt="carrito" width={35} height="auto" className='pt-4' />
        </div>
      </div>

      <h1 className='fs-3 mb-5 mx-5 text-center'>
        Nada como una Guajolota <br /> para empezar el dia :D
      </h1>

      <InputGroup className='mb-5'>
        <InputGroup.Text id="basic-addon1"><BsSearch /></InputGroup.Text>
        <Form.Control
          placeholder="Sabor de guajolota o bebida"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>

      <ul className='row me-2'>
        <Button
          className='col'
          variant="link"
          onClick={() => setLista("Guajalotes")}
        >Guajalotas</Button>
        <Button
          className='col'
          variant="link"
          onClick={() => setLista("Tamales")}
        >Tamales</Button>
        <Button
          className='col'
          variant="link"
          onClick={() => setLista("Bebidas")}
        >Bebidas</Button>
      </ul>
      <ul className='list-group'>
        {
          filtered.map(product => (
            <Button as={Link} to={`/detalle/${product.clase}${product.id}`} key={product.id} variant='primar' className='my-2'>
              <div >
                <div className="row">
                  <div className="col">
                    <img variant="top" src={product.imagen} width={80} alt={product.name} />
                  </div>
                  <div className="col pt-3">
                    <div>
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

                  <div className='col'></div>
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
