import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Header } from './header';

const Content = styled.main`
  max-width: 1024px;
  margin: auto;
  height: ${ p => p.height || '90vh'};
`

export const PageLayout = ({ children, ...props }) => (
  <>
    <Header />
    <Content {...props}>
      {children}
    </Content>
  </>
)

PageLayout.propTypes = {
  children: PropTypes.node.isRequired
}