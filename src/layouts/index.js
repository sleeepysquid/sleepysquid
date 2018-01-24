import React from "react"
import Helmet from "react-helmet"
import styled, { css } from "styled-components"
import { Flex, Box } from "grid-styled"
import { media } from "../utils/style-utils"

import Navigation from "../components/navigation"
import MainSection from "../components/main-section"
import backgroundUrl from "../assets/sleepysquid_banner.png"
import webDev from "../assets/web_dev.png"
import mobileDev from "../assets/mobile_dev.png"

const GradientBackground = styled.div`
    background: linear-gradient(#263774, #224F90);
`;

const Section = styled.div`
    background-color: #fff;
    width: 100%;
    text-align: center;
    
    h2 {
        font-size: 24px;
        font-weight: bold;
        line-height: 1.5;
        color: #333;
        margin-bottom: 0px;
    }

    p {
        font-size: 20px;
        font-weight: 600;
        line-height: 1.5;
        color: #999;
        margin-top: 5px;
    }
`

const BorderedBox = styled.div`
    padding: 20px;
    border-radius: 6px;
    box-shadow: 0 6px 12px #e1ebef;
    border: solid 1px #e8f5f9;
    max-width: 800px;
`
const Title = styled.h1`
    margin: 0;
    font-size: 48px;
    font-weight: bold;
    line-height: 1.5;
    padding: 10px;
    color: #003648;
`

const Menu = styled
export default ({ children }) => (
    <div>
        <Helmet defaultTitle={`SleepySquid`} titleTemplate={`%s | SleepySquid`}>
          <meta name="twitter:site" content="@lawmbass" />
          <meta name="og:type" content="website" />
          <meta name="og:site_name" content="SleepySquid" />
          <html lang="en" />
          <style>{'* { margin: 0; padding: 0; box-sizing: border-box; } html { min-height: 100% } body{background: linear-gradient(to right, #263774, #224F90);}'}</style>
        </Helmet>
        <Flex 
            wrap 
            align='center' 
            justify='center'>
            <Box p={1} width={[ 1 ]}>
                <Navigation />
            </Box>
            <Box p={1} width={[1, 1/2]} mx='auto'>
                {children()}
            </Box>
            <Section>
                <Title>What We Do At SleepySquid</Title>
                <Flex wrap align='center' justify='center' width={1}>
                
                    <Box p={4}>
                        <BorderedBox>
                            <img src={webDev} alt="" style={{height: `auto`, maxWidth: `400px`, width: `100%`}} />
                            <h2 style={{color: `#224F90`}}>Web Development</h2>
                            <p>
                                Here at SleepySquid we take web development seriously. 
                                We specialize in everything from data rich web applications, 
                                to the most basic websites. We do this using custom codes 
                                developed by our team of experts, and of course you! Any 
                                vision you have for your business, SleepySquid can help bring 
                                to fruition.
                            </p>
                        </BorderedBox>
                    </Box>
                    
                    <Box p={2}>
                        <BorderedBox>
                            <img src={mobileDev} alt="" style={{height: `auto`, maxWidth: `400px`, width: `100%`}} />
                            <h2 style={{color: `#224F90`}}>Mobile Development</h2>
                            <p>
                                Many people believe mobile development means simply creating an app. 
                                In reality, its about creating a great user experience within a limited 
                                amount of space. SleepySquid makes your ideas a reality by creating seamless 
                                applications, which allows for amazing consumer experiences. 
                            </p>
                        </BorderedBox>
                    </Box>
                </Flex>
            </Section>
        </Flex>
    </div>
);
