import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import { useDispatch } from 'react-redux';
import { fetchCompany, updateCompany } from '../../actions';
import { CompanyFormFields } from './company-form-fields';
import { PageLayout } from '../common/page-layout';
import { useCompanyDetails } from './use-company';
import { Button } from '../common/button'

export const CompanyShow = ({ match }) => {
  const slug = match.params.slug;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCompany(slug))
  }, [])

  const { initialValues, validationSchema } = useCompanyDetails();
  
  const onSubmit = values => {
    dispatch(updateCompany(slug, values))
  }

  return (
    <PageLayout>
      <div>This is the Companies#show view</div>
      <Formik
        enableReinitialize={true}
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <CompanyFormFields />
          <Button type="submit">Update</Button>
        </Form>
      </Formik>
    </PageLayout>
  )
}

CompanyShow.propTypes = {
  match: PropTypes.object.isRequired
}