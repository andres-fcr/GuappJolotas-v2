import React from 'react';
import { Button, Card, Carousel } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import Counter from '../actions/Counter';
import { Beba, Boto, Cafe, Carro, Contenido, Comi, Contodo, Flecha, Foto, Fotografias, Nombre, Prepio, Sabroso, Combo, Contenga, Contenidito } from '../styles/SliderStyles';

const Detail = ({ tarea }) => {

  const clave = "productos";
  const params = useParams()
  const { id } = params
  const num = id.replace(/[^0-9]/g, '')
  const withNoDigits = id.replace(/[0-9]/g, '');

  const buscado = tarea.find((obj) => obj.id === Number(num));

  const { precio, imagen, product } = buscado

  const info = tarea.filter(function (element) {
    return element.clase === buscado.clase;
  });

  const iconos = tarea.filter(function (element) {
    return element.clase === withNoDigits;
  });

  const drink = tarea.filter(function (element) {
    return element.clase === "Bebidas"
  })

  const eat = tarea.filter(function (element) {
    return element.clase === "Tamales"
  })
  console.log(withNoDigits);

  const obtener = () => {
    const productosCodificados = localStorage.getItem(clave);
    return JSON.parse(productosCodificados) || [];
  }
  const productos = obtener();

  const guardar = () => {
    localStorage.setItem(clave, JSON.stringify(productos));
  }


  const existe = (id) => {
    return productos.find(producto => producto.id === id);
  }

  const agregar = (buscado) => {
    if (!existe(buscado.id)) {
      productos.push(buscado);
      guardar();
    }
  }

  function Bebida() {
    return (
      <div>
        <p>Selecciona la bebida que más te guste y disfruta de tu desayuno.</p>
        <div className=' col text-center'>
          <div className='row row-cols-2'>
            {
              drink.map(x => (
                <div key={x.id} className='row-md-auto my-3 my-sm-4'>
                  <Card
                    className='h-100 d-inline-block'
                    height={200}>
                    <img variant="top" src={x.imagen} alt={x.name} width={70}
                      className="img-fluid" />
                    <Card.Body>
                      <Card.Title className='fs-5 fw-bold'>{x.name}</Card.Title>
                      <Card.Text className='precio'>
                        ${x.precio} MXN
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    )
  }

  function Comida() {
    return (
      <div>
        <p>Selecciona la torta que más te guste y disfruta de tu desayuno</p>
        <div className=' col text-center'>
          <div className='row row-cols-2'>
            {
              eat.map(x => (
                <div key={x.id} className='row-md-auto my-3 my-sm-4'>
                  <Card
                    className='h-100 d-inline-block'
                    height={200}>
                    <img variant="top" src={x.imagen} alt={x.name} width={70}
                      className="img-fluid" />
                    <Card.Body>
                      <Card.Title className='fs-5 fw-bold'>{x.name}</Card.Title>
                      <Card.Text className='precio'>
                        ${x.precio} MXN
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className='container-sm w-100 mw-auto bg-light shadow p-4 p-sm-5 my-sm-5 rounded'>

      <Link to="/producto">
        <img
          src="https://res.cloudinary.com/dbyw7mbt6/image/upload/v1643496365/guappjolotas/Vector_a8gtlb.png"
          alt="back"
          className='mt-4'
          height={35}
          width="auto"
        />
      </Link>
      <Link to="/carrito">
        <img
          src="https://res.cloudinary.com/dbyw7mbt6/image/upload/v1643496426/guappjolotas/shopping-cart_pbl62y.png"
          alt="carrito"
          className='pt-4 float-end'
          width={35}
          height="auto"
        />
      </Link>


      <div className='col'>
        <img
          src={imagen}
          alt="imagen producto"
          width={200}
          className='img-fluid mx-auto row mb-3'
        />
      </div>
      <div className='w-50 mx-auto fw-bold text-center fs-3 mb-3'>
        {product}
      </div>
      <div className='w-50 mx-auto fw-bold text-center fs-3 mb-3 precio'>
        ${precio} MXN
      </div>


      <div className='container bg-white shadow py-3 rounded w-50 mb-5' >
        <Counter />
      </div>

      <div className='fs-2 fw-bold'>Sabor</div>

      <div className=' col text-center'>
        <div className='row row-cols-3 '>
          {iconos.map((i) => (
            <div className='row-md-auto my-3 my-sm-4' key={i.id}>
              <Link to={`/detalle/${i.clase}${i.id}`}>
                <img src={i.icono} alt={i.product} width={65} />
              </Link>
            </div>
          ))}
        </div>
      </div>

      <Combo>Guajolocombo</Combo>
      {withNoDigits === "Tamales" ? (
        <Bebida />
      ) : withNoDigits === "Guajalotes" ? (
        <Bebida />
      ) : (
        <Comida />
      )}

      <br /><br />
      <Button onClick={() => agregar()}>
        Agregar al carrito {precio}
      </Button>

    </div>
  );
};

export default Detail;
