import React from "react"
import Helmet from "react-helmet"

export default ({ children }) => (
    <div>
        <Helmet defaultTitle={`SleepySquid`} titleTemplate={`%s | SleepySquid`}>
          <meta name="twitter:site" content="@lawmbass" />
          <meta name="og:type" content="website" />
          <meta name="og:site_name" content="SleepySquid" />
          <html lang="en" />
        </Helmet>
        <div style={{ margin: `0 auto`, maxWidth: 650, padding: `0 1rem` }}>
            {children()}
        </div>
    </div>
);
