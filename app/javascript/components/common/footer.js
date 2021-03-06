import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.div`
  background-color: #00171f;
  position: fixed;
  bottom: 0;
  text-align: center;
  width: 100%;
  color: white;
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Footer = () => (
  <FooterWrapper>
    <p>&copy; 2021 Ana Morales</p>
  </FooterWrapper>
)