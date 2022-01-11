module.exports = {
    env: {
        node: true,
        es2021: true,
    },
    extends: [
        'airbnb-base',
        'plugin:vue/essential',
        'plugin:md/prettier',
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
    ],
    rules: {
        indent: ['error', 4],
    },
}
