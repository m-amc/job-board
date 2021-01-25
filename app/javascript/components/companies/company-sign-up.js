import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createCompany } from '../../actions'
import { Formik, Form } from 'formik';
import { CompanySignUpFormFields } from './company-form-fields';
import { PageLayout } from '../common/page-layout';
import { useCompanyDetails } from './use-company';
import { Redirect } from 'react-router-dom';
import { Button } from '../common/button'

const STATUS = {
  created: 'created'
}

export const CompanySignUp = () => {
  const { initialValues, validationSchema } = useCompanyDetails();
  const dispatch = useDispatch();
  const company = useSelector(state => state.companyDetails.companyData);

  const onSubmit = values => {
    dispatch(createCompany(values));
  };

  return (
    <PageLayout>
      <h1>Employer Sign Up</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <CompanySignUpFormFields />
          <Button type="submit">Sign Up!</Button>
        </Form>
      </Formik>
      {
        company.status === STATUS.created ? <Redirect to="/jobs/new" push /> : null
      }
    </PageLayout>
  )
}