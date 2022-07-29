import React from 'react';
import { Formik } from 'formik';
import { urlUser } from '../helpers/Url';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';

const Login = () => {

  const navigate = useNavigate()

  const iniciarSesion = (valores) => {
    axios.get(urlUser, { params: { email: valores.correo, password: valores.contrasena } })
      .then(response => {
        console.log(response.data);
        if (response.data.length > 0) {
          alert("se ha iniciado sesion")
          navigate('/producto')
        } else {
          alert("Ususario o contraseña incorrectos")
        }
      })
      .catch(error => {
        console.log(error);
      })
  }

  return (<>
    <Formik
      initialValues={{
        correo: 'andres@gmail.com',
        contrasena: '123',
      }}
      onSubmit={(valores) => {
        console.log(valores);
        iniciarSesion(valores)
      }}
    >
      {({ values, handleSubmit, handleChange, handleBlur }) => (
        <div className='container-sm bg-white shadow p-5 my-5 rounded'>
          <Form className='formulario' onSubmit={handleSubmit}>
            <div>
                <img src="https://res.cloudinary.com/dbyw7mbt6/image/upload/v1642700045/guappjolotas/logo_a9tk2c.png" width={100} height="auto" alt="logo" className='img-fluid mx-auto row mb-3' />
              <h1 className='fs-3 mb-3 text-center mb-2'> Inicia sesión. </h1>
              {/* <div className='row '> */}
                <Form.Group className=''>
                  <Form.Label htmlFor='correo'></Form.Label>
                  <Form.Control
                    type="email"
                    id='correo'
                    name='correo'
                    placeholder="Introduce tu correo"
                    value={values.correo}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label htmlFor='contrasena'></Form.Label>
                  <Form.Control
                    type="password"
                    id='contrasena'
                    name='contrasena'
                    placeholder='Contraseña'
                    value={values.contrasena}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </Form.Group>
              {/* </div> */}

              <div className='d-grid gap-2 mx-auto mt-5' >
                <Button type='submit' className='mb-2'>Iniciar Sesión</Button>
                <Button type='button' as={Link} to="/crearCuenta" variant="link">Registrate</Button>
              </div>
            </div>
          </Form>
        </div>
      )}
    </Formik>
  </>
  );
};

export default Login;
