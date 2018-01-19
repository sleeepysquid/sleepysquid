import React from "react"
import Link from "gatsby-link"
import { Flex, Box } from "grid-styled"

export default ({ children }) => (
  <Flex>
    <Box width={2/3} mx='auto' my='5em'>
      {children}
    </Box>
  </Flex>
)
