import React from 'react';
import PropTypes from 'prop-types';
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

TextAreaField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}