import React from 'react';
import {
  Form,
} from 'formik';
import {
  CompanyFormFields,
  CompanySignUpFormFields
} from './company-form-fields'

export const CompanyForm = () => (
  <Form>
    <CompanyFormFields />
    <button type="submit">Update</button>
  </Form>
)

export const CompanySignUpForm = () => (
  <Form>
    <CompanySignUpFormFields />
    <button type="submit">Sign Up!</button>
  </Form>
)