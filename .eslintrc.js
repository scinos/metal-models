module.exports = {
    env: {
        node: true,
        es2021: true,
    },
    extends: [
        'airbnb-base',
        'plugin:md/prettier',
        'plugin:prettier/recommended',
    ],
    parserOptions: {
        ecmaVersion: 13,
    },
    overrides: [
        {
            files: ['*.ts'],
            // These need to be separated because otherwhise `airbnb-typescript/base` will force everything to be parsed with
            // `@typescript-eslint/parser`, which requires parserOptions.project to be set, which breaks if it is set and there
            // is an override with a different parser
            extends: ['airbnb-typescript/base', 'plugin:prettier/recommended'],
            parserOptions: {
                parser: '@typescript-eslint/parser',
                project: './tsconfig.eslint.json',
            },
        },
        {
            files: ['*.md'],
            parser: 'markdown-eslint-parser',
            rules: {
                'prettier/prettier': [
                    'error',
                    {
                        // Tells prettier to use `markdown` parser for .md files
                        parser: 'markdown',
                    },
                ],
            },
        },
        {
            files: ['*.vue'],
            extends: ['plugin:vue/vue3-essential'],
            parserOptions: {
                parser: '@typescript-eslint/parser',
                sourceType: 'module',
            },
            globals: {
                __VUEPRESS_SSR__: false,
            },
            rules: {
                'vue/multi-word-component-names': 'off',
            },
        },
    ],
    rules: {
        indent: ['error', 4],
        'import/no-extraneous-dependencies': [
            'error',
            {
                devDependencies: true,
            },
        ],
        'import/extensions': ['error', 'always'],

        'no-param-reassign': 'off',
    },
}
