import React from "react"
import Container from "../components/container"
import styled from "styled-components"

const MainSection = styled.section`
    text-align: center;
    color: #fff;
    h1 {
      font-size: 67px;
      color: #fff;
    }
    p {
      font-size: 32px;
    }
`;

const CallToAction = styled.button`
    font-size: 35px;
    font-weight: bold;
    background-color: #F9BD5D;
    color: #2A3136;
    border-color: #382323;
    border-radius: 10px;
    padding: 10px;
`;

export default () => (
  <div>
    <MainSection>
      <h1>Establish your presence</h1>
      <p>
        In today's modern society having an online presence is essential to 
        advancing the reach of your business and brand.
      </p>
      <CallToAction>Let's Talk</CallToAction>
    </MainSection>
  </div>
)