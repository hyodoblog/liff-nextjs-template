module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: { project: './tsconfig.json' },
  settings: {},
  plugins: ['simple-import-sort', 'sort-destructure-keys', 'import-access'],
  extends: ['plugin:@typescript-eslint/recommended', 'next/core-web-vitals', 'prettier'],
  rules: {
    curly: 'error',
    'no-console': ['error', { allow: ['warn', 'info', 'error'] }],
    'no-restricted-syntax': ['error', { selector: 'TSEnumDeclaration', message: "Don't declare enums" }],
    'prefer-arrow-callback': 'error',
    'prefer-const': 'error',
    // 'arrow-body-style': ['error', 'as-needed', { requireReturnForObjectLiteral: true }],
    'no-restricted-imports': ['error', { paths: [{ name: 'react', importNames: ['default'] }] }],

    // react
    'react-hooks/exhaustive-deps': 'off',
    'react/display-name': 'off',
    'react/jsx-handler-names': [
      'error',
      {
        eventHandlerPrefix: 'handle',
        eventHandlerPropPrefix: 'on',
        checkLocalVariables: false,
        checkInlineFunction: true
      }
    ],
    'react/destructuring-assignment': ['error', 'always'],

    // sort
    // 'import/newline-after-import': 'error',
    'import/no-default-export': 'error',
    'import-access/jsdoc': 'error',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'sort-destructure-keys/sort-destructure-keys': 2,

    // @typescript-eslint
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/consistent-type-imports': ['warn', { prefer: 'type-imports' }],
    '@typescript-eslint/no-unused-vars': ['error', { varsIgnorePattern: '^_', argsIgnorePattern: '^_' }],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: ['typeAlias', 'typeParameter'],
        format: ['PascalCase', 'UPPER_CASE']
      },
      { selector: ['method'], format: ['camelCase', 'PascalCase'] },
      {
        selector: 'variable',
        types: ['boolean'],
        format: ['PascalCase'],
        prefix: ['no', 'is', 'has', 'should'],
        filter: { regex: '^_', match: false }
      }
    ],

    // jsx-a11y
    'jsx-a11y/no-autofocus': 'off',
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight'],
        aspects: ['invalidHref', 'preferButton']
      }
    ]
  },
  overrides: [
    {
      files: [
        'playwright.config.ts',
        'pages/**/*.tsx',
        'pages/**/*.ts',
        'src/createEmotionCache.ts',
        'src/theme/base.ts',
        'next.config.mjs'
      ],
      rules: { 'import/no-default-export': 'off' }
    },
    {
      files: ['pages/**/*.tsx', 'pages/**/*.ts', 'next.config.js', 'src/type/**/*.d.ts'],
      rules: {
        '@typescript-eslint/naming-convention': [
          'error',
          { selector: ['typeAlias', 'typeParameter'], format: ['PascalCase'] },
          { selector: ['classProperty', 'method'], format: ['camelCase'] },
          {
            selector: 'variable',
            types: ['boolean'],
            format: ['PascalCase'],
            prefix: ['is', 'has', 'should']
          }
        ]
      }
    }
  ]
}
