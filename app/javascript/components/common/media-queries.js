import { css } from 'styled-components';

const breakpoints = {
  phone: 480,
  tablet: 768,
  laptop: 1024,
  desktop: 1280
}

export const media = Object.keys(breakpoints).reduce((acc, label) => {
  acc[label] = (...args) => css`
      @media (min-width: ${breakpoints[label]}px) {
        ${css(...args)};
      }
  `
  return acc
}, {})
