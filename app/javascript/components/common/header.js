import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  height: 8rem;
  width: 100%;
  box-sizing: border-box;
  position: fixed;
  padding: 0 1.6rem;
  top: 0;
  background: linear-gradient( to right, ${ p => p.theme.primaryColor}, ${ p => p.theme.secondaryColor});
`

const MainHeading = styled.h1`
  color: white;
`

export const Header = () => {

  return (
    <HeaderWrapper>
      <MainHeading>Job Board</MainHeading>
    </HeaderWrapper>
  )
}