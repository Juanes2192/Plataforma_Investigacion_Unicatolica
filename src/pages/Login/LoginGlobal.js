import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import "./LoginGlobal.css";

export function LoginGlobal() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema(),
    onSubmit: (formValues) => {
      if (formValues.email === 'usuario@gmail.com' && formValues.password === 'usuario') {
        console.log('Login ok');
        console.log(formValues);
        navigate('/HomeAdmin'); // Redirección a la ruta '/home'
      } else {
        console.log('Usuario o contraseña incorrectos');
      }
    },
  });

  return (
    <div className="login">
      <Form className="login-form-admin" onSubmit={formik.handleSubmit}>
        <h1>Iniciar Sesión</h1>
        <Form.Group controlId="email">
          <Form.Label>Correo Electrónico</Form.Label>
          <Form.Control
            name="email"
            type="email"
            placeholder="Correo electrónico"
            value={formik.values.email}
            onChange={formik.handleChange}
            isInvalid={formik.touched.email && !!formik.errors.email}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.email}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Contraseña"
            value={formik.values.password}
            onChange={formik.handleChange}
            isInvalid={formik.touched.password && !!formik.errors.password}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.password}
          </Form.Control.Feedback>
        </Form.Group>
        <Button type="submit" variant="primary">
          Iniciar Sesión
        </Button>
      </Form>
    </div>
  );

  function validationSchema() {
    return Yup.object().shape({
      email: Yup.string().email('Ingrese un correo electrónico válido').required('Campo requerido'),
      password: Yup.string().required('Campo requerido'),
    });
  }
}