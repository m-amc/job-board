import React from 'react';
import PropTypes from 'prop-types';
import { ErrorMessage } from 'formik';
import { FieldError } from './field-error';
import { FieldWrapper } from './field-wrapper';
import { Field, Label } from '../../../themes/atoms';

export const InputField = ({ label, name, ...rest }) => (
  <FieldWrapper>
    <Label htmlFor={name}>{label}</Label>
    <Field
      id={name}
      name={name}
      marginTop="0.5rem"
      {...rest}
    />
    <ErrorMessage name={name} component={FieldError} />
  </FieldWrapper>
)

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}