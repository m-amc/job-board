import React from 'react';
import { InputField } from './input-field';
import { TextAreaField } from './textarea-field';
import { SelectField } from './select-field';

export const FIELD_TYPE = {
  input: 'input',
  textArea: 'textarea',
  select: 'select'
}

export const FormField = ({fieldType, ...rest}) => {
  switch (fieldType) {
    case FIELD_TYPE.input:
      return <InputField {...rest} />
    case FIELD_TYPE.textArea:
      return <TextAreaField {...rest} />
    case FIELD_TYPE.select:
      return <SelectField {...rest} />
    default: 
      return null
  }
}