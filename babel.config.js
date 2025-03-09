module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      ["module:react-native-dotenv"],
      "@babel/plugin-proposal-export-namespace-from",
      "@babel/plugin-transform-export-namespace-from",
    ],
  };
};
