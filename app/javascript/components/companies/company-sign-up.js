import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createCompany } from '../../actions'
import { Formik } from 'formik';
import { CompanySignUpForm } from './company-form';
import { PageLayout } from '../common/page-layout';
import { useCompanyDetails } from './use-company';
import { Redirect } from 'react-router-dom';

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
        <CompanySignUpForm />
      </Formik>
      {
        company.status === STATUS.created ? <Redirect to="/jobs/new" push /> : null
      }
    </PageLayout>
  )
}