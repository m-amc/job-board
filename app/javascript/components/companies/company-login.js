import React from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';
import { PageLayout } from '../common/page-layout';
import { CompanyLoginFormFields } from './company-form-fields';
import { Button, Box, HeadingOne } from '../../themes/atoms';
import { REQUIRED } from '../constants';
import { loginUser } from '../../actions';
import { media } from '../common/media-queries';
import { Footer } from '../common/footer';

const initialValues = {
  email: '',
  password: '',
}

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email format').required(REQUIRED),
  password: Yup.string().required(REQUIRED),
})

const Wrapper = styled(Box)`
  padding: 2rem;
  width: 100%;

  ${ media.tablet`
    margin-top: 5rem;
  `}
`

const LoginWrapper = styled(Box)`
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

  div{
    width: 25rem;
  }

  ${ media.tablet`
    width: 40rem;
  `}
`

export const CompanyLogin = () => {
  const dispatch = useDispatch();

  const onSubmit = values => dispatch(loginUser(values));

  return (
    <>
      <PageLayout>
        <Wrapper>
          <LoginWrapper>
            <HeadingOne fontWeight="bold" margin="1rem 0">Sign In</HeadingOne>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              <Form>
                <CompanyLoginFormFields />
                <Button type="submit" margin="2rem auto">Login</Button>
              </Form>
            </Formik>
          </LoginWrapper>
        </Wrapper>
      </PageLayout>
      <Footer />
    </>
  )
}