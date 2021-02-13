import React from 'react';
import PropTypes from 'prop-types';
import { ErrorMessage } from 'formik';
import { FieldError } from './field-error';
import { Box, Field, Label } from '../../../themes/atoms';

export const SelectField = ({ label, name, options, ...rest }) => (
  <Box display="block">
    <Label htmlFor={name}>{label}</Label>
    <Field
      as="select"
      id={name}
      name={name}
      marginTop="0.5rem"
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
  </Box>
)

SelectField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired
}