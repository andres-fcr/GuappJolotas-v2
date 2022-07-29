import React, { useState } from 'react';

import { Formik } from "formik";
import { urlUser } from '../helpers/Url';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';

const Register = () => {

  const [cuentaCreada, cambiarCuentaCreada] = useState(false);

  const envioData = (valores) => {
    axios.post(urlUser, valores)
      .then(response => {
        console.log(response.data)
      })
      .catch(error => console.log(error))
  }

  return (
    <Formik
      initialValues={{
        nombre: '',
        correo: '',
        contrasena: ''
      }}

      validate={(valores) => {
        let errores = {};

        if (!valores.nombre) {
          errores.nombre = ("Por favor ingresa un nombre");
        } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)) {
          errores.nombre = "Escribe solo letras y espacio"
        }


        if (!valores.correo) {
          errores.correo = ("Por favor ingresa un correo electronico");
        } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.correo)) {
          errores.correo = "El correo solo puede contener letras, numero, puntos, guion bajo"
        }
        return errores
      }}

      onSubmit={(valores) => {
        console.log(valores);
        console.log("Cuenta Creada");
        cambiarCuentaCreada(true);
        setTimeout(() => cambiarCuentaCreada(false), 5000);
        localStorage.setItem("User", JSON.stringify(valores))
        envioData(valores)
      }}
    >
      {({ values, errors, handleSubmit, handleChange, handleBlur }) => (
        <div className='container bg-white shadow p-5 my-5 bg-body rounded'>
          <Form className='formulario' onSubmit={handleSubmit}>
            <div>
              <img src="https://res.cloudinary.com/dbyw7mbt6/image/upload/v1642700045/guappjolotas/logo_a9tk2c.png" width={100} height="auto" alt="logo" className='img-fluid mx-auto row mb-3' />
              <h1 className='fs-3 mb-3 text-center mb-2'>Registrate.</h1>
              <Form.Group>
                <Form.Label htmlFor='nombre'></Form.Label>
                <Form.Control
                  type="text"
                  id='nombre'
                  name='nombre'
                  placeholder='Nombre Completo'
                  value={values.nombre}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.nombre && <div className='erro'>{errors.nombre}</div>}
              </Form.Group>
              <Form.Group>
                <Form.Label htmlFor='correo' />
                <Form.Control
                  type="Correo"
                  id='correo'
                  name='correo'
                  placeholder='Correo Electrónico'
                  value={values.correo}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.correo && <div className='erro'>{errors.correo}</div>}
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
              <div className='d-grid gap-1 mx-auto mt-5' >
                <Button type='submit' className='mb-2'>
                  Crear Cuenta
                </Button>
                <Button type='button' as={Link} to="/iniciarSesion" variant="link">
                  Iniciar sesión
                </Button>
              </div>
              {cuentaCreada && <p className="exito">Cuenta Creada con Éxito! Ya puedes iniciar sesión</p>}
            </div>
          </Form>
        </div>
      )
      }
    </Formik>
  );
};

export default Register;
