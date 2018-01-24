import { css } from 'styled-components'
/*
 Style-components Media Templates
*/

// these sizes are arbitrary and you can set them to whatever you wish
const sizes = {
    desktop: 1080,
    tablet: 768,
    mobile: 376
  }
  
// Iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((accumulator, label) => {
    // use em in breakpoints to work properly cross-browser and support users
    const emSize = sizes[label] / 16
    accumulator[label] = (...args) => css`
        @media (max-width: ${emSize}em) {
            ${css(...args)}
        }
`

return accumulator
}, {})