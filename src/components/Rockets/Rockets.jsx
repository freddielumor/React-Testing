import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { PageTitle } from '../PageTitle/PageTitle'
import {
  rocketsDataSelector,
  rocketsDataStageSelector,
} from '../../redux/selectors'
import { getRocketsData } from '../../redux/actions/rocketsActions'
import loadingImage from '../../images/loading.svg'
import { LoadingSpinner, Content, NoData } from '../Shared/index.styled'
import Card from '../Card/Card'

const Rockets = () => {
  const dispatch = useDispatch()
  const stage = useSelector(rocketsDataStageSelector)
  const rocketsData = useSelector(rocketsDataSelector)
  const rocketsDataIsEmpty = !rocketsData.length

  React.useEffect(() => {
    // Only fetch data if needed
    if (!rocketsData.length) {
      dispatch(getRocketsData())
    }
  }, [])

  if (stage === 'pending')
    return <LoadingSpinner src={loadingImage} alt="Loading" />

  if (rocketsDataIsEmpty) return <NoData>Data Currently Unavailable</NoData>

  return (
    <section>
      <PageTitle>rockets</PageTitle>

      <Content>
        {rocketsData.map((rocket) => {
          const rocketUrl = `/rockets/${rocket.rocket_id}`

          return (
            <Card
              key={rocket.id}
              name={rocket.rocket_name}
              images={rocket.flickr_images}
              description={rocket.description}
              type={rocket.rocket_type}
              active={rocket.active}
              url={rocketUrl}
            />
          )
        })}
      </Content>
    </section>
  )
}

export default Rockets
