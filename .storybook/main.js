const path = require('path')
module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-postcss",
    "@storybook/addon-a11y",
  ],
  webpackFinal: async config => {
    // Transpile Gatsby module because Gatsby includes un-transpiled ES6 code.
    config.module.rules[0].exclude = [/node_modules\/(?!(gatsby)\/)/]

    // use installed babel-loader which is v8.0-beta (which is meant to work with @babel/core@7)
    config.module.rules[0].use[0].loader = require.resolve("babel-loader")

    // use @babel/preset-react for JSX and env (instead of staged presets)
    config.module.rules[0].use[0].options.presets = [
      require.resolve("@babel/preset-react"),
      require.resolve("@babel/preset-env"),
    ]

    config.module.rules[0].use[0].options.plugins = [
      // use @babel/plugin-proposal-class-properties for class arrow functions
      require.resolve("@babel/plugin-proposal-class-properties"),
      // use babel-plugin-remove-graphql-queries to remove static queries from components when rendering in storybook
      require.resolve("babel-plugin-remove-graphql-queries"),
    ]

    // Prefer Gatsby ES6 entrypoint (module) over commonjs (main) entrypoint
    config.resolve.mainFields = ["browser", "module", "main"];

    // Tailwind
    config.module.rules.push({
      test: /\,css&/,
      use: [
        {
          loader: 'postcss-loader',
          options: {
            ident: 'postcss',
            syntax: "postcss-scss",
            plugins: [
              require("postcss-import"),
              require("postcss-nested"),
              require("tailwindcss"),
              require("autoprefixer"),
            ]
          }
        }
      ],
      include: path.resolve(__dirname, '../'),
    })

    // Aliases:
    config.resolve.alias = {
      "components": path.resolve(__dirname, "..", "src", "components"),
      "pages": path.resolve(__dirname, "..", "src", "pages"),
      "svg": path.resolve(__dirname, "..", "static", "images", "svg"),
      "site.config.json": path.resolve(__dirname, "..", "src", "site.config.json"),
      "styles": path.resolve(__dirname, "..", "src", "styles"),
    }

    // Exclude any SVGs in the /static/images/svg directory from file loader
    const assetRule = config.module.rules.find((rule) =>  {
      if(rule !== undefined && rule.test !== undefined) {
        if (rule.test.test(".svg")) {
          rule.exclude = path.resolve(__dirname, "..", "static/images/svg")
          return true;
        }
      } else return false;
    });

    // Use @svgr/webpack instead for those files
    config.module.rules.unshift({
      test: /(?<=\/svg\/)(.*)(?=.svg)/,
      use: ["@svgr/webpack"]
    });

    return config;
  },
}

