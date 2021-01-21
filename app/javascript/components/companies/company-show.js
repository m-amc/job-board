import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Formik,
} from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCompany, updateCompany } from '../../actions';
import { CompanyForm } from './company-form';
import { PageLayout } from '../common/page-layout';

const useCompanyInfo = () => {
  const companyInfo = useSelector(state => state.companyInfo.companyInfo);

  const initialValues = {
    name: companyInfo.name ?? '',
    address: companyInfo.address ?? '',
    city: companyInfo.city ?? '',
    state: companyInfo.state ?? '',
    country: companyInfo.country_code ?? '',
    phone: companyInfo.contact_number ?? '',
    email: companyInfo.email ?? '',
    website: companyInfo.website ?? '',
    about: companyInfo.about ?? ''
  }

  const REQUIRED = 'Required';

  const validationSchema = Yup.object({
    name: Yup.string().required(REQUIRED),
    address: Yup.string().required(REQUIRED),
    city: Yup.string().required(REQUIRED),
    country: Yup.string().required(REQUIRED),
    phone: Yup.string().required(REQUIRED),
    email: Yup.string().email('Invalid email format').required(REQUIRED),
    about: Yup.string().required(REQUIRED)
  })

  return {
    initialValues,
    validationSchema
  };
}

export const CompanyShow = ({ match }) => {
  const slug = match.params.slug;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCompany(slug))
  }, [])

  const { initialValues, validationSchema} = useCompanyInfo();
  
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
        <CompanyForm />
      </Formik>
    </PageLayout>
  )
}

CompanyShow.propTypes = {
  match: PropTypes.object.isRequired
}