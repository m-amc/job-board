import React from 'react';
import styled from 'styled-components';
import { Header } from './header';

const Content = styled.main`
  max-width: 1024px;
  box-sizing: border-box;
  font-family: 'Helvetica';
  margin: 10rem auto 0 auto;
  /* border: 1px solid red; */
`

export const PageLayout = ({ children }) => (
  <>
    <Header />
    <Content>
      {children}
    </Content>
  </>
)