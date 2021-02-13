import React from 'react';
import PropTypes from 'prop-types';
import { ErrorMessage } from 'formik';
import { FieldError } from './field-error';
import { Box, Field, Label } from '../../../themes/atoms';

export const InputField = ({ label, name, ...rest }) => (
  <Box display="block">
    <Label htmlFor={name}>{label}</Label>
    <Field
      id={name}
      name={name}
      marginTop="0.5rem"
      {...rest}
    />
    <ErrorMessage name={name} component={FieldError} />
  </Box>
)

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}