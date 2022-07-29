import accounting from 'accounting';
import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Foto, Precio, Producto, TProducto } from '../styles/ProductosStyles';

const Cards = ({ product, cart, setCart, prod }) => {
    return <div>
        <Producto >
            <Card style={{ width: '312px' }} border="secondary" >
                <Link to={`/detalle/${product.clase}${product.id}`}>
                    <div className="row">
                        <div className="col">
                            <Foto variant="top" src={product.imagen} />
                        </div>
                        <div className="col">
                            <Card.Body style={{ width: '10rem' }}>
                                <TProducto>{product.name}</TProducto>
                                <Precio>
                                    {accounting.formatMoney(product.precio, "MXN")}
                                </Precio>
                            </Card.Body>
                        </div>
                    </div>
                </Link>
            </Card >
        </Producto ></div>;
};

export default Cards