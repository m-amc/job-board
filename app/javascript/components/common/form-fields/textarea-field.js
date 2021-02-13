import React from 'react';
import PropTypes from 'prop-types';
import { ErrorMessage, Field } from 'formik';
import { FieldError } from './field-error';
import { Box, Label } from '../../../themes/atoms';

const TextArea = ({ name, ...props }) => (
  <Field
    as="textarea"
    id={name}
    name={name}
    rows="20"
    {...props}
  />
)

export const TextAreaField = ({ label, name, ...rest }) => (
  <Box>
    <Label htmlFor={name} marginBottom="0.5rem">{label}</Label>
    <TextArea
      id={name}
      name={name}
      {...rest}
    />
    <ErrorMessage name={name} component={FieldError} />
  </Box>
)

TextAreaField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}