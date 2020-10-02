import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { media } from '../../styles/mediaQueries'
import { appStyles } from '../../styles/appStyles'
import logoImage from '../../images/rocket.svg'

export const AppHeader = ({ children }) => (
  <Header>
    <Link to="/">
      <Logo src={logoImage} alt="Logo" />
      <Title>SpaceX Rockets</Title>
    </Link>
    <Divider />

    <Content>{children}</Content>
  </Header>
)

/* -- Components -- */

// Header
export const Header = styled.header`
  text-align: center;
`

// Header Content
const Content = styled.div``

// Logo
export const Logo = styled.img`
  max-width: 3.125rem;

  @media ${media.tablet} {
    max-width: 5rem;
  }
`

// Title
export const Title = styled.h1`
  color: ${appStyles.color.primary};
  font-size: 1.2rem;
  font-family: ${appStyles.font.extraBold};
  text-transform: uppercase;

  @media ${media.mobile} {
    font-size: 1.8rem;
  }

  @media ${media.tablet} {
    font-size: 2.5rem;
  }
`

// Divider
export const Divider = styled.hr`
  background-color: ${appStyles.color.primary};
  border: 1px solid ${appStyles.color.primary};
  height: 0.05rem;
  margin: 1rem 0;
`
