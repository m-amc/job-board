import React from 'react';
import PropTypes from 'prop-types';
import { Field, ErrorMessage } from 'formik';
import { FieldError } from './field-error';

export const SelectField = ({ label, name, options, ...rest }) => (
  <div>
    <label htmlFor={name}>{label}</label>
    <Field
      as="select"
      id={name}
      name={name}
      {...rest}
    >
      {
        options.map(option => (
          <option
            key={option.value}
            value={option.value}
          >
            {option.name}
          </option>
        ))
      }
    </Field>
    <ErrorMessage name={name} component={FieldError} />
  </div>
)

SelectField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired
}