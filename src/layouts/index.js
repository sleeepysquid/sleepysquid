import React from "react"
import Helmet from "react-helmet"

import backgroundUrl from "../assets/sleepysquid_banner.png"


const divStyle = {
    height: '100vh',
    backgroundImage: 'url(' + backgroundUrl + ')',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    zIndex: 999
};


export default ({ children }) => (
    <div>
        <Helmet defaultTitle={`SleepySquid`} titleTemplate={`%s | SleepySquid`}>
          <meta name="twitter:site" content="@lawmbass" />
          <meta name="og:type" content="website" />
          <meta name="og:site_name" content="SleepySquid" />
          <html lang="en" />
        </Helmet>
        {/* <div style={{ margin: `0 auto`, maxWidth: 650, padding: `0 1rem` }}>
            {children()}
        </div> */}
        <div style={divStyle}>
        </div>
    </div>
);
