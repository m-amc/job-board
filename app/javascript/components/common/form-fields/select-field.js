import React from 'react';
import PropTypes from 'prop-types';
import { ErrorMessage, useField } from 'formik';
import { FieldError } from './field-error';
import { FieldWrapper } from './field-wrapper';
import { Field, Label } from '../../../themes/atoms';

/**
 * Note: using useField because because for some reason Formik Field as select is losing its automatic hook magic when styled-component is applied
*/ 

export const SelectField = ({ label, name, options, ...rest }) => {
  const [ field ] = useField(name)
  return (
    <FieldWrapper>
      <Label htmlFor={name}>{label}</Label>
      <Field
        as="select"
        id={name}
        name={name}
        marginTop="0.5rem"
        {...field}
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
    </FieldWrapper>
  )
}

SelectField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired
}