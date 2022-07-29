import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Bienvenida, Botones, Centrar, Iniciar, Titulo } from '../styles/HomeStyles';

const Home = () => {
    return (
        <div className='container bg-white shadow p-5 my-5 bg-body rounded ' >
            <img src="https://res.cloudinary.com/dbyw7mbt6/image/upload/v1642700045/guappjolotas/logo_a9tk2c.png" alt='logo' className='img-fluid mx-auto row mb-5' width={100} />
            <h1 className='fs-1 mb-3 text-center mb-5'>Bienvenidos</h1>
            <div className='d-grid gap-2 col-6' >
                <Button as={Link} to="/iniciarSesion" variant="primary" className='mb-4'>
                    Iniciar Sesion
                </Button>
                <Button as={Link} to="/crearCuenta" variant="primar">Crear Cuenta
                </Button>
            </div>
        </div>
    );
};

export default Home;

