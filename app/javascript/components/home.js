import React from 'react';
import styled from 'styled-components'
import { Footer } from './common/footer';
import JOB_INTERVIEW from "../../assets/images/job-interview.svg"
import { HeadingOne, Box } from '../themes/atoms';
import { media } from './common/media-queries';
import { PageLayout } from './common/page-layout';
import { Link } from 'react-router-dom';

const HeroContainer = styled(Box)`
  background-image: url(${JOB_INTERVIEW});
	background-repeat: no-repeat;
  background-position: bottom;
  background-size: 475px;
  height: 100%;

  ${ media.tablet`
    background-position: bottom 10px right -100px;
    background-size: 800px;
  `}

  ${ media.laptop`
    background-position: bottom right -50px;
  `}
`

const StyledHeadingOne = styled(HeadingOne)`
  margin-top: 3rem;
  text-align: center;

  ${media.tablet`
    margin: 5rem 0 0 5rem;
    text-align: left;
    font-size: 3rem;
  `}
`

const StyledNavLink = styled(Link)`
  text-decoration: dotted;
  color: ${ p => p.theme.blueDarker};

  &:hover {
    text-decoration: underline;
  }
`

const Hero = () => (
  <HeroContainer>
    <StyledHeadingOne>
      Your next job is just a <StyledNavLink to="/jobs" >click</StyledNavLink> away!
    </StyledHeadingOne>
  </HeroContainer>
)

export const Home = () => (
  <>
    <PageLayout height="80vh">
      <Hero />
    </PageLayout>
    <Footer />
  </>
)