import React from "react"
import Helmet from "react-helmet"
import styled from "styled-components"

import Navigation from "../components/navigation"
import MainSection from "../components/main-section"
import backgroundUrl from "../assets/sleepysquid_banner.png"

const GradientBackground = styled.div`
    background: linear-gradient(#263774, #224F90);
    font-family: "Segoe UI", Frutiger, "Frutiger Linotype", "Dejavu Sans", "Helvetica Neue", Arial, sans-serif;
    height: 100vh;
    line-height: 43px;
`;

export default ({ children }) => (
    <div>
        <Helmet defaultTitle={`SleepySquid`} titleTemplate={`%s | SleepySquid`}>
          <meta name="twitter:site" content="@lawmbass" />
          <meta name="og:type" content="website" />
          <meta name="og:site_name" content="SleepySquid" />
          <html lang="en" />
        </Helmet>
        <GradientBackground>
            <Helmet defaultTitle={`SleepySquid`} titleTemplate={`%s | SleepySquid`}>
                <meta name="twitter:site" content="@lawmbass" />
                <meta name="og:type" content="website" />
                <meta name="og:site_name" content="SleepySquid" />
            <html lang="en" />
            </Helmet>
            <Navigation />
            <MainSection>
                {children()}
            </MainSection>
        </GradientBackground>
    </div>
);
