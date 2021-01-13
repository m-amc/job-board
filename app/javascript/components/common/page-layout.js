import React from 'react';
import styled from 'styled-components';

const Content = styled.main`
  max-width: 1024px;
  box-sizing: border-box;
  font-family: 'Helvetica';
  margin: 80px auto 0 auto;
`

export const PageLayout = ({children}) => (
  <Content>
    {children}
  </Content>
)