module.exports = {
    siteMetadata: {
        title: `SleepySquid`,
        siteUrl: `https://www.sleepysquid.com`,
        description: `Awesome software consulting company`
    },
    plugins: [
        `gatsby-plugin-styled-components`,
        {
            resolve: `gatsby-plugin-typography`,
            options: {
                pathToConfigModule: `src/utils/typography.js`,
            },
        },
    ],
};