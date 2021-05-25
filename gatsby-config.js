module.exports = {
  siteMetadata: {
    defaultTitle: "Gatsby Starter",
    defaultTitleTemplate: "%s | Gatsby Starter",
    defaultDescription: "",
    siteUrl: "https://www.site-url.com",
    defaultImage: "/images/social.jpg",
  },
  plugins: [
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-remark",
    "gatsby-transformer-sharp",
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-source-datocms",
      options: {
        apiToken: "b5019e46a4caf253589f28c4d2d4d8",
      },
    },
    {
      resolve: "gatsby-alias-imports",
      options: {
        aliases: {
          components: "src/components",
          pages: "src/pages",
          svg: "static/images/svg",
          "site.config.json": "src/site.config.json",
          styles: "src/styles",
        },
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /svg/,
        },
      },
    },
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: ["Manrope:200,400,600,800"],
        display: "swap",
      },
    },
  ],
};
