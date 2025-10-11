import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  username: Yup.string().required('Username is required'),
  email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

const FormikForm = () => {

  const initialValues = {
    username: '',
    email: '',
    password: '',
  };

  const handleSubmit = (values, { resetForm }) => {
    console.log('Form submitted successfully:', values);
    alert('User registered successfully!');
    resetForm();
  };

  return (
    <div style={{ maxWidth: '400px', margin: '40px auto' }}>
      <h2>Formik Registration Form</h2>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form>
            <div>
              <label>Username:</label><br />
              <Field
                type="text"
                name="username"
                placeholder="Enter your username"
              />
              <ErrorMessage name="username" component="p" style={{ color: 'red' }} />
            </div>
            <br />
            <div>
              <label>Email:</label><br />
              <Field
                type="email"
                name="email"
                placeholder="Enter your email"
              />
              <ErrorMessage name="email" component="p" style={{ color: 'red' }} />
            </div>
            <br />
            <div>
              <label>Password:</label><br />
              <Field
                type="password"
                name="password"
                placeholder="Enter your password"
              />
              <ErrorMessage name="password" component="p" style={{ color: 'red' }} />
            </div>
            <br />
            <button type="submit">Register</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormikForm;

