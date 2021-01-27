import React from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { PageLayout } from '../common/page-layout';
import { CompanyLoginFormFields } from './company-form-fields';
import { Button } from '../common/button';
import { REQUIRED } from '../constants';
import { loginUser } from '../../actions';

const initialValues = {
  email: '',
  password: '',
}

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email format').required(REQUIRED),
  password: Yup.string().required(REQUIRED),
})

export const CompanyLogin = () => {
  const dispatch = useDispatch();

  const onSubmit = values => dispatch(loginUser(values));

  return (
    <PageLayout>
      <h1>Employer Login</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <CompanyLoginFormFields />
          <Button type="submit">Login</Button>
        </Form>
      </Formik>
    </PageLayout>
  )
}