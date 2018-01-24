import React from "react"
import Link from "gatsby-link"
import { Flex, Box } from "grid-styled"

export default ({ children }) => (
  <Flex>
    <Box width={3/4} mx='auto'>
      {children}
    </Box>
  </Flex>
)
