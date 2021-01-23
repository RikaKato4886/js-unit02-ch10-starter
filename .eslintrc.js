module.exports = {
  "env": {
    "browser": true,
    "es6": true
  },
  "parser": "babel-eslint",
  "extends": [
    'airbnb-base',
  ],
  "root": true,
  "parserOptions": {
    "ecmaVersion": 7,
    "sourceType": "module",
      "ecmaFeatures": {
          "impliedStrict": true
      }
  },
  "rules": {
    "semi": ["error", "always"],
    "quotes": ["error", "single"],
    "eol-last": 0,
    "arrow-body-style": 0
  },
};
