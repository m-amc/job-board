import React, { useEffect } from 'react';
import {
  Formik,
  Form,
  Field
} from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCompany, updateCompany } from '../../actions';

const useCompanyInfo = () => {
  const companyInfo = useSelector(state => state.companyInfo.companyInfo);

  const initialValues = {
    name: companyInfo.name ?? '',
    address: companyInfo.address ?? '',
    city: companyInfo.city ?? '',
    state: companyInfo.state ?? '',
    country: companyInfo.country_code ?? '',
    email: companyInfo.email ?? '',
    website: companyInfo.website ?? '',
    about: companyInfo.about ?? ''
  }

  return initialValues;
}

export const CompanyShow = ({ match }) => {
  const slug = match.params.slug;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCompany(slug))
  }, [])

  const initialValues = useCompanyInfo();
  
  const onSubmit = values => {
    dispatch(updateCompany(slug, values))
  }

  return (
    <>
      <div>This is the Companies#show view</div>
      <Formik
        enableReinitialize={true}
        initialValues={initialValues}
        onSubmit={onSubmit}
      >
        <Form>
          <label htmlFor="name">Name</label>
          <Field
            type="text"
            name="name"
            id="name"
            disabled
          />

          <label htmlFor="address">Address</label>
          <Field
            type="text"
            name="address"
            id="address"
          />

          <label htmlFor="city">City</label>
          <Field
            type="text"
            name="city"
            id="city"
          />

          <label htmlFor="state">State</label>
          <Field
            type="text"
            name="state"
            id="state"
          />

          <label htmlFor="country">Country</label>
          <Field
            type="text"
            name="country"
            id="country"
          />

          <label htmlFor="email">Email</label>
          <Field
            type="email"
            name="email"
            id="email"
          />

          <label htmlFor="website">Website</label>
          <Field
            type="text"
            name="website"
            id="website"
          />

          <label htmlFor="about">About</label>
          <Field
            type="text"
            name="about"
            id="about"
          />

          <button type="submit">Update</button>
        </Form>
      </Formik>
    </>
  )
}