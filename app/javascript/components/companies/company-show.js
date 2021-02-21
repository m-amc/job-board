import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { fetchCompany, updateCompany } from '../../actions';
import { CompanyFormFields } from './company-form-fields';
import { PageLayout } from '../common/page-layout';
import { useCompanyDetails } from './use-company';
import { Button, HeadingOne, Box } from '../../themes/atoms';
import { media } from '../common/media-queries';

const FlexBox = styled(Box)`
  display: flex;
  flex-direction: column;

  ${media.tablet`
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    
    div {
      width: calc(100% / 3 - 1rem);
    }
  `}
`

const Wrapper = styled(Box)`
  padding: 2rem;
  width: 100%;
`

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
      <Wrapper>
        <HeadingOne>Profile</HeadingOne>
        <Formik
          enableReinitialize={true}
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <Form>
            <FlexBox>
              <CompanyFormFields />
              <Button type="submit" marginTop="2rem">Update</Button>
            </FlexBox>
          </Form>
        </Formik>
      </Wrapper>
    </PageLayout>
  )
}

CompanyShow.propTypes = {
  match: PropTypes.object.isRequired
}