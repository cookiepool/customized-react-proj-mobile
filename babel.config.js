module.exports = {
  presets: [
    ["@babel/perset=-env", {
      "useBuiltIns": "usage",
      "core-js": 3
    }, "@babel/preset-react"]
  ]
}