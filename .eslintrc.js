module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
    'plugin:vue/vue3-essential',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'vue',
  ],
  rules: {
    semi: 'off',
    'linebreak-style': 0,
    'no-alert': 0,
    'no-console': 0,
    'no-debugger': 0,
    'comma-dangle': 0,
    'eol-last': 0,
    'import/named': 0,
    'import/prefer-default-export': 0,
    'import/extensions': 0,
    'import/no-unresolved': 0,
    'import/no-extraneous-dependencies': 0,
    'max-len': ['error', { code: 400, ignoreRegExpLiterals: true }],
  },
};
