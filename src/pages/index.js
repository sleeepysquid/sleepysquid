import React from "react"
import styled from "styled-components"
import InfoCard from "../components/info-card"

// Creating a Title component that'll render a <h1> tag with some styles
const Title = styled.h1`
  font-size: 4em;
  color: #263774;
`

const Text = styled.p`
  font-size: 2em;
  color: #1676BC;
`

const Motto = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
`

export default () => (
  <div style={{minHeight: `500px`, display: `flex`, justifyContent: `center`, alignItems: `center`}}>
    <Motto>
      <Title>ESTABLISH YOUR PRESENCE</Title>
      <Text>
        In today's society having an online presence is essential
         to advancing the reach of your business and brand.
      </Text>
    </Motto>
  </div>
)