import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { createCompany } from '../../actions'
import { Formik, Form } from 'formik';
import { CompanySignUpFormFields } from './company-form-fields';
import { PageLayout } from '../common/page-layout';
import { useCompanyDetails } from './use-company';
import { Button, HeadingOne, Box } from '../../themes/atoms';
import { media } from '../common/media-queries';

const STATUS = {
  created: 'created'
}

const SignUpWrapper = styled(Box)`
  border: 1px solid gray;
  box-shadow: 0 0 1rem #ccc;
  padding: 1rem;
  border-radius: 0.5rem;
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${media.tablet`
    width: 40rem;
  `}
`

export const CompanySignUp = () => {
  const { initialValues, signUpValidationSchema } = useCompanyDetails();
  console.log("HELLO", signUpValidationSchema)
  const dispatch = useDispatch();

  const onSubmit = values => {
    dispatch(createCompany(values));
  };

  return (
    <PageLayout>
      <Box padding="2rem">
        <SignUpWrapper>
          <HeadingOne fontWeight="bold">Sign Up</HeadingOne>
          <Formik
            initialValues={initialValues}
            validationSchema={signUpValidationSchema}
            onSubmit={onSubmit}
          >
            <Form>
              <CompanySignUpFormFields />
              <Button type="submit" margin="2rem auto">Sign Up!</Button>
            </Form>
          </Formik>
        </SignUpWrapper>
      </Box>
    </PageLayout>
  )
}