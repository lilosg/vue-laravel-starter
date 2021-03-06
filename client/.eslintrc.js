module.exports = {
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: [
    // add more generic rulesets here, such as:
    // 'eslint:recommended',
    'plugin:vue/vue3-recommended',
    '@vue/airbnb',
  ],
  rules: {
    // override/add rules settings here, such as:
    // 'vue/no-unused-vars': 'error'
  },
};
