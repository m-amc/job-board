import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  height: 6rem;
  width: 100%;
  box-sizing: border-box;
  position: fixed;
  padding: 0 1.6rem;
  top: 0;
  background: linear-gradient( to right, #ade8f4, #caf0f8);
`

export const Header = () => {

  return (
    <HeaderWrapper>
      <h1>Job Board</h1>
    </HeaderWrapper>
  )
}