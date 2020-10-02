import styled from 'styled-components'
import { appStyles } from '../../styles/appStyles'
import { media } from '../../styles/mediaQueries'

// Loading Spinner
export const LoadingSpinner = styled.img`
  display: block;
  margin: auto;
`

// No Data Message
export const NoData = styled.h4`
  color: ${appStyles.color.black};
  font-size: 1.5rem;
  margin: 5rem auto;
  text-align: center;
`

// Content Grid
export const Content = styled.div`
  margin-top: 2rem;

  @media ${media.tablet} {
    display: grid;
    grid-template-columns: auto auto;
    grid-column-gap: 3rem;
    grid-row-gap: 4.5rem;
  }
`

// 3 Column Content Grid
export const FlexContainer = styled.div`
  text-align: center;
  @media ${media.tablet} {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    align-items: center;

    & > * {
      flex-basis: 33.333333%;
    }
  }
`

// Divider
export const Divider = styled.hr`
  background-color: ${appStyles.color.black};
  width: ${(props) => (props.width ? `${props.width}%` : '100%')};
  color: ${(props) => props.color && props.color};
  margin: 1.5rem auto;
`

// Single Item Images Container
export const ItemImagesContainer = styled.div`
  @media ${media.tablet} {
    display: grid;
    grid-template-columns: auto auto auto;
    grid-column-gap: 3rem;
    grid-row-gap: 1rem;
  }
`

// Single Item Image
export const ItemImage = styled.img`
  margin-top: 1rem;
`

// Sub Heading
export const SubHeading = styled.h4`
  font-family: ${appStyles.font.semiBold};
  margin: 1rem 0;
  color: ${(props) => props.color || appStyles.color.black};
  font-size: ${(props) => (props.fontSize ? `${props.fontSize}rem` : '1.2rem')};
`

// Text
export const Text = styled.p`
  line-height: 1.5;
  color: ${(props) => props.color || appStyles.color.black};
  font-size: ${(props) => (props.fontSize ? `${props.fontSize}rem` : '1rem')};
  text-align: ${(props) => props.align && props.align};
  width: ${(props) => props.width && props.width && 'margin: auto'};
  margin: ${(props) => props.margin && props.margin};
`

// Link
export const AnchorLink = styled.a`
  color: ${appStyles.color.primary};
  font-family: ${appStyles.font.semiBold};
  text-align: center;
  font-size: 1.5rem;

  &:hover {
    color: ${appStyles.color.primaryHover};
  }
`
