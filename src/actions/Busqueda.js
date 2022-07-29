import React, { useEffect, useState } from "react";
import axios from "axios";
import { Foto, Precio, Producto, TProducto } from "../styles/ProductosStyles";
import { urlGuajolota } from "../helpers/Url";
import { Card } from "react-bootstrap";
import {Lilinput, ListProductos } from "../styles/BusquedaStyles";
import {  Div } from "../styles/LoginStyles";
import { Link } from 'react-router-dom';


function Busqueda() {

    const [produ, setProdu] = useState([]);
    const [tablaProductos, setTablaProductos] = useState([]);
    



    const peticionGet = async () => {
        await axios.get(urlGuajolota)
            .then(response => {
                setProdu(response.data);
                setTablaProductos(response.data)
            }).catch(error => {
                console.log(error);
            })
    }

    const handleChange = ({target}) => {
        console.log(target.value);
        filtrar(target.value);
    }

    const filtrar = (terminoBusqueda) => {

        // eslint-disable-next-line array-callback-return
        var resultadoBusqueda = tablaProductos.filter((elemento) => {
            if (elemento.product.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
                || elemento.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
                || elemento.clase.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
            ) {
                return elemento;
            }
        });
        setProdu(resultadoBusqueda);
    }

    useEffect(() => {
        peticionGet();
    }, [])



    return (
        <div className='busca'>
          
          <Div>
            <Lilinput
                type="Search"
                placeholder='Sabor de Guajolota,bebida.'
                onChange={handleChange}
            />
            <ListProductos>
                {   
                    produ.map(product => (

                        <Producto key={product.id} >
                            <Link to={`/detalle/${product.clase}${product.id}`}>
                                <Card style={{ width: '300px' }} border="secondary" >
                                    <div className="row">
                                        <div className="col">
                                            <Foto variant="top" src={product.imagen} />
                                        </div>
                                        <div className="col">
                                            <Card.Body style={{ width: '10rem' }}>
                                                <TProducto>{product.product}</TProducto>
                                                <Precio>
                                                    {product.precio}
                                                </Precio>
                                            </Card.Body>
                                      </div>
                                    </div>
                                </Card >
                            </Link>
                        </Producto >
                    ))
                }
            </ListProductos>
            </Div>
        </div>
    )


}

export default Busqueda;