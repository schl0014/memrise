module.exports = {
  root: true,
  env: {
    es2022: true,
    browser: true,
    node: true,
  },
  extends: [
    'semistandard',
    'plugin:import/recommended',
    'plugin:sonarjs/recommended',
    'plugin:promise/recommended',
    'prettier',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'sonarjs/no-duplicate-string': 'off',
  },
  plugins: ['only-warn', 'import', 'sonarjs', 'promise', 'html', '@html-eslint'],
  overrides: [
    {
      files: ['*.html'],
      parser: '@html-eslint/parser',
      extends: ['plugin:@html-eslint/recommended'],
      rules: {
        'spaced-comment': 'off',
        '@html-eslint/indent': ['error', 2],
        '@html-eslint/require-meta-charset': 'error',
        '@html-eslint/require-meta-viewport': 'error',
        '@html-eslint/require-meta-description': 'off',
        '@html-eslint/require-button-type': 'error',
        '@html-eslint/element-newline': 'off',
        '@html-eslint/no-target-blank': 'error',
        '@html-eslint/no-duplicate-id': 'error',
        '@html-eslint/no-extra-spacing-attrs': [
          'error',
          {
            enforceBeforeSelfClose: true,
          },
        ],
        '@html-eslint/require-closing-tags': [
          'error',
          {
            selfClosing: 'always',
          },
        ],
        '@html-eslint/id-naming-convention': ['error', 'camelCase'],
      },
    },
  ],
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@', './src'],
          ['appConfig', './appConfig'],
        ],
      },
    },
  },
};
