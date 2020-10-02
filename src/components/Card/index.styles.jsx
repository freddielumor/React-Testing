import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { media } from '../../styles/mediaQueries'
import { appStyles } from '../../styles/appStyles'
import rocketIcon from '../../images/rocket.svg'
import capsuleIcon from '../../images/capsule.svg'
import activeIcon from '../../images/active.svg'
import inactiveIcon from '../../images/inactive.svg'

// Reusable Card Component
export const Card = ({ children, url }) => (
  <CardLink to={url}>{children}</CardLink>
)

// CardLink (Link to the item)
export const CardLink = styled(Link)`
  display: block;
  position: relative;
  height: 100%;
  box-shadow: 0.3125rem 0.3125rem 0.625rem rgba(0, 0, 0, 0.6);
  border-radius: 0.5rem;
  overflow: hidden;

  &:not(:first-child) {
    margin-top: 2rem;
  }

  @media ${media.tablet} {
    &:not(:first-child) {
      margin-top: initial;
    }
  }

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: opacity 2s cubic-bezier(0.165, 0.84, 0.44, 1);
    box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2),
      0 6px 20px 0 rgba(0, 0, 0, 0.15);
    content: '';
    opacity: 0;
    z-index: -1;
  }

  &:hover,
  &:focus {
    transform: scale3d(1.009, 1.009, 1);

    &::after {
      opacity: 1;
    }
  }
`

// Card Image Container
export const CardImageContainer = styled.div``

// CardImage
export const CardImage = styled.img`
  width: 100%;
  object-fit: cover;

  @media ${media.tablet} {
    height: 35vh;
  }

  @media ${media.desktop} {
    object-fit: initial;
  }
`

// CardTitle
export const CardTitle = styled.h4`
  margin: 0.5rem 0;
  font-family: ${appStyles.font.semiBold};

  color: ${(props) => props.color || appStyles.color.black};
  font-size: ${(props) => (props.fontSize ? `${props.fontSize}rem` : '1.5rem')};
`

// Card Text Container
export const CardTextContainer = styled.div`
  padding: 1rem;

  @media ${media.tablet} {
    padding: 2rem;
  }
`

// Card Description
export const CardDescription = styled.p`
  line-height: 1.5;
  color: ${(props) => props.color || appStyles.color.black};
  font-size: ${(props) => (props.fontSize ? `${props.fontSize}rem` : '1rem')};
`

// Card Status Container
export const CardStatusContainer = styled.div`
  display: flex;
  align-items: center;
  & > div {
    margin-right: 1rem;
  }
`

// Card Icon
export const CardIcon = styled.img`
  width: 2rem;
`

// Card Status (Active / Inactive)
export const CardStatus = ({ active }) => (
  <div>
    {active ? (
      <CardIcon src={activeIcon} alt="Active" title="Item is active" />
    ) : (
      <CardIcon
        src={inactiveIcon}
        alt="Not active"
        title="Item is not active"
      />
    )}
  </div>
)

// Card Type (Rocket / Capsule)
export const CardType = ({ type }) => (
  <div>
    {type === 'rocket' ? (
      <CardIcon src={rocketIcon} alt={type} title={`${type}`} />
    ) : (
      <CardIcon src={capsuleIcon} alt={type} title={`${type}`} />
    )}
  </div>
)
