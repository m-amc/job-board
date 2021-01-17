import React from 'react';
import styled from 'styled-components'
import { Header } from './common/header';
import { Footer } from './common/footer';
import { PageLayout } from './common/page-layout';

const HeroBanner = styled.div`
  background-image: url("assets/ian-dooley-unsplash.jpg");
	background-repeat: no-repeat;
	background-size: cover;
	/* background-position: center; */
  height: 100vh;
`

export const Home = () => (
    <>
      <Header />
      <HeroBanner />
      <Footer />
    </>
)