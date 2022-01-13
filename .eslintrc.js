module.exports = {
    env: {
        node: true,
        es2021: true,
    },
    extends: [
        'eslint:recommended',
        'airbnb-base',
        'plugin:vue/vue3-essential',
        'plugin:md/prettier',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
    ],
    parserOptions: {
        ecmaVersion: 13,
        parser: '@typescript-eslint/parser',
    },
    plugins: ['vue', '@typescript-eslint'],
    overrides: [
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
            parser: 'vue-eslint-parser',
            globals: {
                __VUEPRESS_SSR__: false,
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

        'vue/multi-word-component-names': 'off',
    },
}
