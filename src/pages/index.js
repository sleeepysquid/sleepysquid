import React from "react"
import styled from "styled-components"

// Creating a Title component that'll render a <h1> tag with some styles
const Title = styled.h1`
  font-size: 67px;
`

const Text = styled.p`
  font-size: 32px;
`

const Motto = styled.section`
    text-align: center;
    color: #fff;
    height: 600px
`

export default () => (
  <div>
    <Motto>
      <Title>Establish your presence</Title>
      <Text>
        In today's modern society having an online presence is essential
         to advancing the reach of your business and brand.
      </Text>
    </Motto>
  </div>
)