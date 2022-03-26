module.exports = {
  'env': {
    'browser': true,
    'es2021': true
  },
  'extends': [ 'plugin:react/recommended', 'airbnb', 'prettier', 'plugin:import/typescript' ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    },
    'ecmaVersion': 'latest',
    'sourceType': 'module'
  },
  'settings': {
    'import/resolver': {
      'node': {
        'extensions': ['.js', '.jsx', '.ts', '.tsx']
      }
    }
  },
  'plugins': [ 'react', '@typescript-eslint', 'prettier' ],
  'rules': {
    'react/jsx-filename-extension': 'off',
    'import/extensions': 'off',
    'no-unused-vars': 'warn',
  }
};
