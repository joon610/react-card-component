module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
  ],
  babel: (options) => {
    options.presets = options.presets.map((preset) => {
      if (Array.isArray(preset) && preset[0].includes('@babel/preset-react')) {
        return [require.resolve('@babel/preset-react'), {runtime: 'classic'}]
      }

      return preset
    })

    return options
  },
}