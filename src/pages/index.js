import React from "react";
import styled from "styled-components";
import { Flex, Box } from "grid-styled";
import InfoCard from "../components/info-card";

import MainSection from "../components/main-section";
import backgroundUrl from "../assets/sleepysquid_banner.png";
import squid_blue from "../assets/squid_blue.svg";
import webDev from "../assets/web_dev.png";
import mobileDev from "../assets/mobile_dev.png";
import clientArkOfSafety from "../assets/client_ark_of_safety.png";
import clientKeyFoundry from "../assets/client_keyfoundry.png";
import clientImagineCreativeWorks from "../assets/client_icw.png";
import clientRealLifeInvestors from "../assets/real_life_investors.png";
import Navigation from "../components/navigation";

const GradientBackground = styled.div`
  background: linear-gradient(#263774, #224f90);
`;

const Section = styled.div`
  width: 100%;
  text-align: center;
  background: linear-gradient(#263774, #1676bc);
  padding-bottom: 2em;
  h2 {
    font-size: 24px;
    font-weight: bold;
    line-height: 1.5;
    color: rgba(0, 0, 0, 0.87);
    margin-bottom: 0px;
  }

  p {
    font-size: 20px;
    font-weight: 300;
    line-height: 1.5;
    color: #777;
    margin-top: 5px;
  }
`;

const SquidBackground = styled.div`
  background-image: url(${squid_blue});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: 95%;

  @media (max-width: 1800px) {
    background-position: 100%;
  }

  @media (max-width: 1200px) {
    background-image: none;
  }
`;

const BorderedBox = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 6px;
  box-shadow: 0 6px 12px #224f90;
  border: solid 1px #224f90;
  max-width: 800px;
`;
const Title = styled.h1`
  margin: 0;
  font-size: 2em;
  font-weight: bold;
  line-height: 1.5;
  padding: 20px;
  color: #263774;
`;

// Creating a Title component that'll render a <h1> tag with some styles
const Tagline = styled.h1`
  font-size: 4em;
  color: #263774;

  @media (max-width: 500px) {
    font-size: 3.5em;
  }
`;

const Text = styled.p`
  font-size: 2em;
  color: #1676bc;
  @media (max-width: 500px) {
    font-size: 1.5em;
  }
`;

const Motto = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
`;

export default () => (
  <div>
    <SquidBackground>
      <Navigation />
      <Flex wrap align="center" justify="center">
        <Box p={1} width={[1]} />
        <Box p={1} width={[1, 1 / 2]} mx="auto">
          <div
            style={{
              minHeight: `500px`,
              display: `flex`,
              justifyContent: `center`,
              alignItems: `center`,
              padding: `10px`
            }}
          >
            <Motto>
              <Tagline>ESTABLISH YOUR PRESENCE</Tagline>
              <Text>
                In today's society having an online presence is essential to
                advancing the reach of your business and brand.
              </Text>
            </Motto>
          </div>
        </Box>
      </Flex>
    </SquidBackground>

    <Section>
      <Title style={{ color: "#fff" }}>What We Do</Title>
      <Flex wrap align="center" justify="center" width={1}>
        <Box p={2}>
          <BorderedBox>
            <img
              src={webDev}
              alt=""
              style={{ height: `auto`, maxWidth: `400px`, width: `100%` }}
            />
            <h2>Web Development</h2>
            <p>
              Here at SleepySquid we take web development seriously. We
              specialize in everything from data rich web applications, to the
              most basic websites. We do this using custom codes developed by
              our team of experts, and of course you! Any vision you have for
              your business, SleepySquid can help bring to fruition.
            </p>
          </BorderedBox>
        </Box>

        <Box p={2}>
          <BorderedBox>
            <img
              src={mobileDev}
              alt=""
              style={{ height: `auto`, maxWidth: `400px`, width: `100%` }}
            />
            <h2>Mobile Development</h2>
            <p>
              Many people believe mobile development means simply creating an
              app. In reality, its about creating a great user experience within
              a limited amount of space. SleepySquid makes your ideas a reality
              by creating seamless applications, which allows for amazing
              consumer experiences.
            </p>
          </BorderedBox>
        </Box>
      </Flex>
    </Section>
    <Section style={{ background: "none" }}>
      <Title>Clients We've Worked With</Title>
      <Flex p={1}>
        <Box width={1 / 4}>
          <a href="http://www.arkofsafetychristianchurch.com/" target="_blank">
            <img
              src={clientArkOfSafety}
              alt=""
              style={{ height: `auto`, maxWidth: `250px`, width: `100%` }}
            />
          </a>
        </Box>
        <Box width={1 / 4}>
          <a href="http://keyfoundryllc.com/" target="_blank">
            <img
              src={clientKeyFoundry}
              alt=""
              style={{ height: `auto`, maxWidth: `250px`, width: `100%` }}
            />
          </a>
        </Box>
        <Box width={1 / 4}>
          <a href="http://www.icwks.com/" target="_blank">
            <img
              src={clientImagineCreativeWorks}
              alt=""
              style={{ height: `auto`, maxWidth: `250px`, width: `100%` }}
            />
          </a>
        </Box>
        <Box width={1 / 4}>
          <a href="#" target="_blank">
            <img
              src={clientRealLifeInvestors}
              alt=""
              style={{ height: `auto`, maxWidth: `250px`, width: `100%` }}
            />
          </a>
        </Box>
      </Flex>
    </Section>
  </div>
);
