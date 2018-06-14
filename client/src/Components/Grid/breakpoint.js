// these sizes are arbitrary and you can set them to whatever you wish
import { css } from 'styled-components'

const sizes = {
  desktop: 2000,
  laptop: 1025,
  tablet: 770,
  phone: 415,
  initial:0
}

export const media1 = Object.keys(sizes).reduce((accumulator, label) => {
  const Size = sizes[label] / 16
  accumulator[label] = (...args) => css`
    @media (max-width: ${Size}em) {
      ${css(...args)}
    }
  `
  return accumulator
}, {})

export const Convert = Object.keys(sizes).reduce((accumulator, label) => {
  const Size = sizes[label] / 16
  accumulator[label] = Size
  return accumulator
}, {})

export const media = {
  phone: (...args) => css`
   @media (min-width: ${Convert.initial}em) and (max-width: ${Convert.phone}em) {
      ${ css(...args) }
    }`,
  tablet: (...args) => css`
  @media (min-width: ${Convert.phone}em) and (max-width: ${Convert.tablet}em) {
    ${ css(...args) }
  }`,
  laptop: (...args) => css`
  @media (min-width: ${Convert.tablet}em) and (max-width: ${Convert.laptop}em) {
    ${ css(...args) }
  }`,
  desktop: (...args) => css`
  @media (min-width: ${Convert.laptop}em) and (max-width: ${Convert.desktop}em) {
    ${ css(...args) }
  }`
}
