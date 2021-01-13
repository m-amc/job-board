import React from 'react';
import { Field, ErrorMessage } from 'formik';
import { FieldError } from './field-error';

export const TextAreaField = ({ label, name, ...rest }) => (
  <div>
    <label htmlFor={name}>{label}</label>
    <Field
      as="textarea"
      id={name}
      name={name}
      {...rest}
    />
    <ErrorMessage name={name} component={FieldError} />
  </div>
)