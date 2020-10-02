import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { appStyles } from '../../styles/appStyles'
import { media } from '../../styles/mediaQueries'

export const AppNav = () => (
  <Nav>
    <NavLink to="/">All Rockets</NavLink>
  </Nav>
)

/* -- Components -- */

// Nav
export const Nav = styled.nav`
  display: flex;
  justify-content: space-evenly;
  margin: auto;
  flex-direction: column;

  @media ${media.mobile} {
    flex-direction: row;
  }
`

// Nav Link
export const NavLink = styled(Link)`
  flex-direction: column;
  min-width: 6rem;
  margin-top: 0;
  padding: 1rem 1rem;
  background-color: ${appStyles.color.primary};
  color: ${appStyles.color.white};
  border-radius: 5px;

  &:not(:first-child) {
    margin-top: 1rem;
  }

  &:hover {
    background-color: ${appStyles.color.primaryHover};
  }

  @media ${media.mobile} {
    &:not(:first-child) {
      margin-top: 0;
    }
  }
`
