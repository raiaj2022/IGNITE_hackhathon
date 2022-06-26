module.exports = {
  siteMetadata: {
    title: `Hackhathon Project`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-mdx", 
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "pages",
        "path": "./src/pages/"
      },
      __key: "pages"
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markDownX`,
        path: `${__dirname}/src/markDownX`,
      },
    },
  ]
};