module.exports = require("babel-jest").createTransformer({
  presets: ["es2015", "react", "stage-2"],
  plugins: ["transform-object-rest-spread"]
});