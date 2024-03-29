module.exports = {
   env: {
      browser: true,
      es2021: true
   },
   extends: [
      'plugin:react/recommended',
      'standard'
   ],
   overrides: [
   ],
   parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module'
   },
   plugins: [
      'react'
   ],
   rules: {
      indent: ['error', 3],
      semi: [2, 'always'],
      'multiline-ternary': ['off']
      /* 'space-before-function-paren': ['error', {anonymous: 'always', named: 'never'}] */
   }
};
