import React from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { PageTitle } from '../PageTitle/PageTitle'
import { getRocketItemData } from '../../redux/actions/rocketItemActions'
import { rocketItemSelector } from '../../redux/selectors'
import { CardStatus, CardType } from '../Card/index.styles'
import {
  ItemImage,
  ItemImagesContainer,
  Divider,
  Text,
  SubHeading,
  FlexContainer,
  AnchorLink,
} from '../Shared/index.styled'
import { formatCurrency } from '../../utils/currencyFormatter'

const RocketItem = () => {
  let { rocket_id } = useParams()
  const dispatch = useDispatch()
  const rocketItemData = useSelector(rocketItemSelector)

  React.useEffect(() => {
    dispatch(getRocketItemData(rocket_id))
  }, [])

  const {
    rocket_name,
    flickr_images: images = [],
    description,
    company,
    active,
    rocket_type: type,
    cost_per_launch,
    height = {},
    mass = {},
    country,
    first_flight,
    wikipedia,
    diameter = {},
  } = rocketItemData

  const launchCost = parseInt(cost_per_launch)

  const firstFlightDate = new Date(first_flight)

  return (
    <section>
      <PageTitle>{rocket_name}</PageTitle>

      <Divider width={50} />

      <Text align={'center'} margin={'3rem auto 1.5rem'}>
        {description}
      </Text>

      <Text align={'center'} margin={'0'}>
        {' '}
        <AnchorLink href={wikipedia}>Learn More</AnchorLink>
      </Text>

      <Divider width={50} />

      <FlexContainer>
        <CardType type={type} />
        <SubHeading>{company}</SubHeading>
        <CardStatus active={active} />

        <Text>Cost per launch: {formatCurrency(launchCost)}</Text>
        <Text>Height: {height.feet} feet</Text>
        <Text>Mass: {mass.kg} KG</Text>

        <Text>Country: {country}</Text>
        <Text>First Flight: {firstFlightDate.toDateString()}</Text>
        <Text>Diameter: {diameter.meters} meters</Text>
      </FlexContainer>

      <Divider width={50} />

      <ItemImagesContainer>
        {images.map((image) => (
          <ItemImage src={image} key={image} />
        ))}
      </ItemImagesContainer>
    </section>
  )
}

export default RocketItem
