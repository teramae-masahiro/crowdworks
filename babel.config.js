module.exports = (api) => {
  api.cache(true);
  return {
    "presets": [
      ["@babel/preset-env", {
        target: [ "web", "es5" ],
        useBuiltIns: "usage",
        corejs: 3
      }]
    ]
  }
}
