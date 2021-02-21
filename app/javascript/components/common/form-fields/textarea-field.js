import React from 'react';
import PropTypes from 'prop-types';
import { ErrorMessage, useField } from 'formik';
import { FieldError } from './field-error';
import { FieldWrapper } from './field-wrapper';
import { Box, Label, Field } from '../../../themes/atoms';

const TextArea = ({ name, ...props }) => (
  <Field
    as="textarea"
    id={name}
    name={name}
    rows="20"
    {...props}
  />
)

export const TextAreaField = ({ label, name, ...rest }) => {
  const [field] = useField(name);
  return (
    <FieldWrapper>
      <Label htmlFor={name} marginBottom="0.5rem">{label}</Label>
      <TextArea
        id={name}
        name={name}
        {...field}
        {...rest}
      />
      <ErrorMessage name={name} component={FieldError} />
    </FieldWrapper>
  )
}

TextAreaField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}