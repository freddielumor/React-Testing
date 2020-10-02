import React from 'react'
import {
  CardLink,
  CardTitle,
  CardImageContainer,
  CardImage,
  CardTextContainer,
  CardDescription,
  CardStatus,
  CardType,
  CardStatusContainer,
} from './index.styles'

const Card = ({ url, name, images, description, type, active }) => (
  <CardLink to={url || ''}>
    {images && (
      <CardImageContainer>
        <CardImage src={images[0]} alt="Card iamge" />
      </CardImageContainer>
    )}

    <CardTextContainer>
      {name && <CardTitle>{name}</CardTitle>}
      {description && <CardDescription>{description}</CardDescription>}

      <CardStatusContainer>
        <CardType type={type} />
        <CardStatus active={active} />
      </CardStatusContainer>
    </CardTextContainer>
  </CardLink>
)

export default Card
