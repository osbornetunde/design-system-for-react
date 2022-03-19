module.exports = {
  stories: ["../src/**/*.stories.tsx"],
  addons: ["@storybook/addon-storysource", "@storybook/addon-knobs"],
  presets: ["@storybook/preset-typescript"],
  features: { postcss: false },
};
