import React, { useState } from 'react';
import styled from 'styled-components';
import { media } from '../common/media-queries';
import { NavigationMenu } from './navigation-links';
import MenuIcon from '../../../assets/images/menu.svg'

const HeaderWrapper = styled.div`
  height: 8rem;
  width: 100%;
  box-sizing: border-box;
  position: fixed;
  padding: 0 1.6rem;
  top: 0;
  background: linear-gradient( to right, ${ p => p.theme.primaryColor}, ${p => p.theme.secondaryColor});
  display: flex;
`

const MainHeadingWrapper = styled.div`
  color: white;
  width: 50%;
`

const StyledMobileMenu = styled.button`
  width: 4rem;
  padding: 0.5rem;
  margin: auto 0 auto auto;
  border: none;
  background: none;

  ${media.tablet`
    display: none;
  `}
`

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <HeaderWrapper>
      <MainHeadingWrapper>
        <h1>Job Board</h1>
      </MainHeadingWrapper>
      <StyledMobileMenu onClick={() => setMenuOpen(!menuOpen)} aria-label="Open menu">
        <img src={MenuIcon} alt=""/>
      </StyledMobileMenu>
      <NavigationMenu menuOpen={menuOpen}/>
    </HeaderWrapper>
  )
}