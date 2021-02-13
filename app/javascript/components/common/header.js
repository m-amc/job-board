import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { media } from '../common/media-queries';
import { NavigationMenu } from './navigation-links';
import { HeadingOne, Box } from '../../themes/atoms';
import MenuIcon from '../../../assets/images/menu.svg';

const FlexHeaderWrapper = styled.div`
  height: 10vh;
  width: 100%;
  background: linear-gradient( to right, ${ p => p.theme.primaryColor}, ${p => p.theme.secondaryColor});
`

const StyledBox = styled(Box)`
  display: flex;
  position: relative;
  max-width: 1024px;
  margin: auto;
  align-items: center;
  height: inherit;
  padding: 0 2rem;

  ${media.tablet`
    padding: 0;
  `}
`

const MainHeadingWrapper = styled.div`
  color: white;
  width: 50%;
  display:flex;
  align-items: center;
`

const StyledMobileMenu = styled.button`
  width: 3.5rem;
  padding: 0.5rem;
  margin: auto 0 auto auto;
  border: none;
  background: none;

  ${media.tablet`
    display: none;
  `}
`

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  cursor: pointer;
  display: flex;
  align-items: center;
`

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <FlexHeaderWrapper>
      <StyledBox>
        <MainHeadingWrapper>
          <HeadingOne>
            <StyledLink to="/">Job Board</StyledLink>
          </HeadingOne>
        </MainHeadingWrapper>
        <StyledMobileMenu onClick={() => setMenuOpen(!menuOpen)} aria-label="Open menu">
          <img src={MenuIcon} alt=""/>
        </StyledMobileMenu>
        <NavigationMenu menuOpen={menuOpen}/>
      </StyledBox>
    </FlexHeaderWrapper>
  )
}